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
import { Text, View, Image } from 'react-native';

export default class MyWalletComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';
        // let tabBarIcon = () => (
        //     <Image
        //         source={require('./../../images/myWallet.png')}
        //         style={{ width: 26, height: 26, tintColor: '#007256' }}
        //     />
        // );
        return { tabBarLabel };
    };

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#007256',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is My Wallet Screen</Text>
            </View>
        );
    }
}