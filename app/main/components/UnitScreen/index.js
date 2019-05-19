/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView,
    // Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';

// Components
import Text, {MediumText} from '../../../base/components/Text';

// Actions
import {updateUnit} from '../../../ui/actions/current';

// Shares
import {convertToString} from '../../../shares/convertData';

import styles from './styles/index.css';

class UnitScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: [],
            isResult: false
        }
    }

    componentDidMount() {
        const _that = this;
        const options = {
            method: 'GET',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: 'http://mobile_qlvb.bacninh.gov.vn/login/unitlist.json',
        };
        return axios(options).then(
            (response) => {
                const data = response.data.data.list;
                _that.setState({data});
            },
            (error) => ({error})
        );
    }

    onChangeText = (text) => {
        this.setState({ query: text, isResult: false });
    };

    findFilm(query) {
        const { data, isResult } = this.state;
        if (query === '' && isResult) {
            return [];
        }
        const regex = new RegExp(`${query.trim()}`, 'i');
        return data.filter(film => film.unit_name.search(regex) >= 0);
    }

    comp = (a, b) => {
        return a.toLowerCase().trim() === b.toLowerCase().trim();
    };

    onFocus = () => {
        this.setState({isResult: false});
    };

    onBlur = () => {
        this.setState({isResult: true});
    };

    setUnit = (item) => {
        this.props.updateUnit(item);
        debugger;
        AsyncStorage.setItem('unit', convertToString(item));
        this.onBlur();
        this.setState({query: item.unit_name});
    };

    onConnect = () => {
        this.props.navigation.navigate('SignInScreen');
    };

    renderItem = (item, i) => {
        return (
            <TouchableOpacity
                style={{paddingHorizontal: 10, paddingVertical: 5, width: '100%'}}
                onPress={() => {
                    this.setState({ query: item.unit_name });
                    this.setUnit(item);
                }}
            >
                <Text text={item.unit_name} />
            </TouchableOpacity>
        )
    };

    renderTextInput = () => {
        return <TextInput
            // autoFocus={true}
            placeholder="Chọn đơn vị"
            autoCorrect={false}
            value={this.state.query}
            autoCapitalize={false}
            returnKeyType='done'
            placeholderTextColor="#bbbbbb"
            underlineColorAndroid="transparent"
            onChangeText={this.onChangeText}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
        />
    };

    // Render any loading content that you like here
    render() {
        const {query, data, isResult} = this.state;
        const films = this.findFilm(query);
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={{alignItems: 'center', marginTop: 100}}>
                        <MediumText text={'GOV'.toUpperCase()} style={{fontSize: 30, color: "white", marginBottom: 15}}/>
                        <MediumText text={'Quản lý văn bản tỉnh Bắc Ninh'.toUpperCase()} style={{fontSize: 20, color: "white"}}/>
                    </View>
                    <View style={[styles.autocompleteContainer, {zIndex: isResult ? 1 : 3}]}>
                        <Autocomplete
                            hideResults={isResult}
                            inputContainerStyle={styles.inputContainerStyle}
                            listStyle={{maxHeight: 180, borderBottomRightRadius: 5, borderBottomLeftRadius: 5}}
                            data={films.length === 1 && this.comp(query, data[0].unit_name) ? [] : films}
                            defaultValue={query}
                            renderItem={this.renderItem}
                            focus={this.onFocus}
                            renderTextInput={this.renderTextInput}
                            onShowResults={this.onShowResults}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={query !== '' ? false : true}
                        style={styles.btnConnect}
                        onPress={this.onConnect}
                    >
                        <Text text={"Kết nối"} style={{color: "white"}} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

UnitScreen.propTypes = {
    updateUnit: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return {
        updateUnit: (unit) => dispatch(updateUnit(unit)),
    };
}

export default connect(null, mapDispatchToProps)(UnitScreen);
