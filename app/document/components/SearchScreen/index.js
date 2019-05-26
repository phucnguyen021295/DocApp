/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 19/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {
    View,
    SafeAreaView,
    ScrollView,
    BackHandler
} from 'react-native';
import {withNavigation} from 'react-navigation';

import HeaderNavigation from '../../../main/components/HeaderNavigation';

import styles from './styles/index.css';
import DocumentSearch from "../DocumentSearch";
import DocumentListContainer from "./DocumentListContainer";
import {updateSearch} from "../../../ui/actions/current";
import DocumentList from "../DocumentList/DocumentList";

const  drawerLabel = 'Tìm kiếm văn bản';
class SearchScreen extends Component {
    // static navigationOptions = {
    //     drawerLabel: () => null
    // };

    // componentDidMount() {
    //     BackHandler.addEventListener("hardwareBackPress", this.onGoBack);
    // }
    //
    // componentWillUnmount() {
    //     BackHandler.removeEventListener("hardwareBackPress", this.onGoBack);
    // }

    onGoBack = () => {
        debugger;
        this.props.updateSearch('');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} isBtnBack={true} onGoBack={this.onGoBack} />
                <View style={{flex: 1, backgroundColor: 'white',}}>
                    <DocumentSearch />
                    <DocumentListContainer drawerLabel={drawerLabel} />
                </View>
            </SafeAreaView>
        );
    }
}

SearchScreen.propTypes = {
    updateSearch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return {
        updateSearch: (keySearch) => dispatch(updateSearch(keySearch))
    }
}

export default withNavigation(connect(null, mapDispatchToProps)(SearchScreen));
