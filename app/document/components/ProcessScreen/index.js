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
import {
    View,
    SafeAreaView,
} from 'react-native';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import DocumentSearch from '../DocumentSearch';
import DocumentListContainer from '../DocumentList/DocumentListContainer';

import styles from './styles/index.css';

const  drawerLabel = 'Văn bản đã xử lý';
class ProcessScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        // let drawerIcon = () => (
        //     <Image
        //         source={require('./../../images/home-icon.png')}
        //         style={{ width: 26, height: 26, tintColor: backgroundColor }}
        //     />
        // );
        return {drawerLabel};
    };

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} />
                <View style={{flex: 1, backgroundColor: 'white',}}>
                    <DocumentSearch />
                    <DocumentListContainer />
                </View>
            </SafeAreaView>
        );
    }
}

export default ProcessScreen;