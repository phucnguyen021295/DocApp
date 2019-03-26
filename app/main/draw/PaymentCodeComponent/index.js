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
// import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from '../../../document/components/HeaderNavigation';

export default class PaymentCodeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Withdrawal';
        // let drawerIcon = () => (
        //     <Image
        //         source={require('./../../images/paymentCode.png')}
        //         style={{ width: 26, height: 26, tintColor: '#964f8e' }}
        //     />
        // );
        return { drawerLabel };
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column' }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    backgroundColor: '#964f8e',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                        This is Payment Code Screen
                    </Text>
                </View>
            </View>
        );
    }
}