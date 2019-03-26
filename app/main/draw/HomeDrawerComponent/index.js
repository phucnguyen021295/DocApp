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

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    SafeAreaView,
} from 'react-native';
import HeaderComponent from '../../../document/components/HeaderNavigation';

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Home';
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
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#4267b2'
            }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    backgroundColor: '#e97600',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                        This is Withdrawal Screen
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}