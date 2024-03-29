/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 04/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import DocumentSearch from '../DocumentSearch';
import DocumentListContainer from './DocumentListContainer';

import styles from './styles/index.css';

const  drawerLabel = 'Danh sách văn bản đến';
class AboutExpireScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerIcon = () => (
            <Ionicons
                name={"ios-arrow-forward"}
                size={20}
                color={"#bbbbbb"}
            />
        );
        return {drawerLabel, drawerIcon};
    };

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} />
                <View style={{flex: 1, backgroundColor: 'white',}}>
                    <DocumentSearch />
                    <DocumentListContainer drawerLabel={drawerLabel} />
                </View>
            </SafeAreaView>
        );
    }
}

export default AboutExpireScreen;