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
    ScrollView,
} from 'react-native';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import Text from '../../../base/components/Text';

import styles from './styles/index.css';

const  drawerLabel = 'Lịch họp';
class UnProcessScreen extends Component {
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
                <HeaderNavigation {...this.props} title={drawerLabel} isBtnBack={true} />
                <View style={styles.content}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={{justifyContent: "center"}}>
                            <Text text={"Lịch họp cơ quan áp dụng từ ngày 25/03/2019 đến ngày 31/03/2019"} style={{color: 'black'}}/>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                            <View style={{flex: 2, flexDirection: "column"}}>
                                <View style={{width: 40}}/>
                            </View>
                            <ScrollView style={{flex: 8, flexDirection: "column"}}  horizontal={true}>
                                <Text text={"abdgggggggggggggggggc"}/>
                                <Text text={"abcdfgdfgdf"}/>
                                <Text text={"abcdfg"}/>
                                <Text text={"abcdfgdfgdf"}/><Text text={"abc"}/>

                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default UnProcessScreen;
