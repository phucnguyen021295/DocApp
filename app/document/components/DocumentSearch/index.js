/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 28/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Text from '../../../base/components/Text';

// Action
import {updateSearch} from '../../../ui/actions/current';

// Selector
import {getSearchDoc} from "../../../ui/selectors/currentSelectors";

// Styles
import styles from './styles/index.css';
import {connect} from "react-redux";
import {withNavigation} from "react-navigation";

class DocumentSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: props.keySearch
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.keySearch !== this.props.keySearch) {
            this.setState({textSearch: nextProps.keySearch})
        }
    }

    onChangeText = (textSearch) => {
        this.setState({textSearch});
    };

    onSearch = () => {
        const {textSearch} = this.state;
        const {keySearch} = this.props;

        if(textSearch === keySearch) {
            return;
        }

        if(textSearch !== '' && keySearch !== '') {
            this.props.updateSearch(textSearch);
            this.props.navigation.replace("SearchScreen");
        }

        if(textSearch !== '' && keySearch === '') {
            this.props.updateSearch(textSearch);
            this.props.navigation.navigate("SearchScreen");
        }

        if(textSearch === '' && keySearch !== '') {
            this.props.updateSearch(textSearch);
            this.props.navigation.goBack();
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onChangeText}
                    value={this.state.textSearch}
                    placeholder="Tìm kiếm trích yếu, số hiệu văn bản"
                    placeholderTextColor="#bbbbbb"
                />
                <TouchableOpacity
                    style={styles.btnSearch}
                    onPress={this.onSearch}
                >
                    <Ionicons
                        name={Platform.OS === 'ios' ? "ios-search" : "md-search"}
                        size={24}
                        color={"#bbbbbb"}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

DocumentSearch.propTypes = {
    updateSearch: PropTypes.fuc,
    keySearch: PropTypes.string,
    navigation: PropTypes.object
};

function mapStateToProps(state) {
    return {
        keySearch: getSearchDoc(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateSearch: (keySearch) => dispatch(updateSearch(keySearch))
    }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(DocumentSearch));
