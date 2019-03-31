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
    Platform,
    TouchableOpacity
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import Text, {MediumText} from '../../../base/components/Text';

import styles from './styles/index.css';

const  drawerLabel = 'Lịch công tác lãnh đạo';
class WorkingScheduleScreen extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Ngày', 'Lãnh đạo dự họp', 'Nội dung', 'Địa điểm', 'Thời gian'],
            tableData: [
                ['Thứ 2\n25/03/2019', '2', '3', '4', '5'],
                ['Thứ 3\n26/03/2019', 'Nguyễn Việt Hùng', 'HN gặp mặt, biểu dương, khen thưởng và đồi ngoại với daonh nghiệp năm 2019', 'Trung tâm VNKB', '08:00:00'],
                ['Thứ 4\n27/03/2019', 'Vũ Huy Phương', 'HN trực tuyến tập huấn Luận QP năm 2018', 'Bộ CHQS tỉnh', '08:00:00'],
                ['Thứ 5\n28/03/2019', 'b', 'c', 'd', '6'],
                ['Thứ 6\n29/03/2019', 'Nguyễn Việt Hùng', 'HN triển khai PCTT-TKCN 2019', 'HT B - Tring tâm VHKB', '08:30:00'],
                ['Thứ 7\n30/03/2019', 'b', 'c', 'd', '6'],
                ['Chủ nhật\n31/03/2019', 'b', 'c', 'd', '6']
            ],
            widthArr: [100, 150, 200, 100, 100]
        }
    }

    onChangeWeekBefore = () => {

    };

    onChangeWeekPresent = () => {

    };

    onChangeWeekAfter = () => {

    };

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} />
                <View style={styles.content}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={{justifyContent: "center", paddingTop: 60, paddingBottom: 5}}>
                            <MediumText
                                text={"Lịch công tác của cơ quan từ ngày 25/03/2019 đến ngày 31/03/2019"}
                                style={{color: 'black', textAlign: 'center', fontSize: 14}}
                            />
                        </View>
                        <ScrollView horizontal={true}>
                            <View>
                                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                    <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={[styles.text, {color: "#ffffff"}]}/>
                                </Table>
                                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                                    {
                                        this.state.tableData.map((rowData, index) => (
                                            <Row
                                                key={index}
                                                data={rowData}
                                                widthArr={this.state.widthArr}
                                                style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                                                textStyle={styles.text}
                                            />
                                        ))
                                    }
                                </Table>
                            </View>
                        </ScrollView>
                        <View style={{flexDirection: 'row'}}>
                            <Text text={"Vuốt bảng sang ngang"} style={{paddingLeft: 15, paddingRight: 5}} />
                            <Ionicons
                                name={Platform.OS === 'ios' ? "ios-code" : "md-code"}
                                size={20}
                                color={"#bbbbbb"}
                            />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "center", paddingTop: 10}}>
                            <TouchableOpacity onPress={this.onChangeWeekBefore}>
                                <MediumText text={"Tuần trước"} style={styles.textBtn}/>
                            </TouchableOpacity>
                            <Text text={"||"} style={styles.space} />
                            <TouchableOpacity onPress={this.onChangeWeekPresent}>
                                <MediumText text={"Tuần hiện tại"} style={styles.textBtn}/>
                            </TouchableOpacity>
                            <Text text={"||"} style={styles.space} />
                            <TouchableOpacity onPress={this.onChangeWeekAfter}>
                                <MediumText text={"Tuần sau"} style={styles.textBtn}/>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default WorkingScheduleScreen;
