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
import {DrawerItems} from 'react-navigation';
import { View, TouchableOpacity, Platform, AsyncStorage, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Text, {MediumText} from '../../../base/components/Text';

import styles from './styles/index.css';

const drawItems = [
    {text: 'Văn bản chưa xử lý', navigation: 'UnProcessScreen'},
    {text: 'Văn bản sắp hết hạn xử lý', navigation: 'AboutExpireScreen'},
    {text: 'Văn bản nhận để biết', navigation: 'ReceiveScreen'},
    {text: 'Văn bản đã xử lý', navigation: 'ProcessScreen'},
    {text: 'Văn bản nội bộ', navigation: 'InternalScreen'},
    {text: 'Phiếu trình', navigation: 'PhieuTrinhScreen'},
    {text: 'Lịch công tác lãnh đạo', navigation: 'WorkingScheduleScreen'},
    {text: 'Lịch họp', navigation: 'MeetingScreen'},
];

class DrawerContent extends Component {

    onGoBack = () => {
        this.props.navigation.goBack();
        return true;
    };

    logout = () => {
        AsyncStorage.clear();
        this.props.navigation.navigate("Auth");
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            style={styles.btnBack}
                            onPress={this.onGoBack}
                        >
                            <Ionicons
                                name={Platform.OS === 'ios' ? "ios-arrow-back" : "md-arrow-back"}
                                size={25}
                                color={"#ffffff"}
                            />
                        </TouchableOpacity>
                        <Text text={'Nguyễn Hồng Phúc'} style={{color: '#ffffff'}} />
                    </View>
                    <View style={styles.screenContainer}>
                        {
                            drawItems.map(item => {
                                return (
                                    <TouchableOpacity style={styles.btnDraw} onPress={() => this.props.navigation.navigate(item.navigation)}>
                                        <MediumText text={item.text} style={styles.text}/>
                                        <Ionicons
                                            name={"ios-arrow-forward"}
                                            size={20}
                                            color={"#bbbbbb"}
                                        />
                                    </TouchableOpacity>
                                )
                            })
                        }
                        {/*<DrawerItems {...this.props} />*/}
                        <TouchableOpacity
                            style={styles.btnBack}
                            onPress={this.logout}
                        >
                            <MediumText text={"Thoát"} style={{color: 'gray'}} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

export default DrawerContent;