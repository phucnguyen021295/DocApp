/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 21/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';

import styles from './styles/index.css';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate('Auth');
        // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        if(userToken) {
            StatusBar.setBackgroundColor('#104068')
        }
    };

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </SafeAreaView>
        );
    }
}

export default AuthLoadingScreen;