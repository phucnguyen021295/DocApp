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
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {
    View,
    SafeAreaView,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { Table, Row, Rows, TableWrapper, Col, Cols, Cell } from 'react-native-table-component';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import Text, {MediumText} from '../../../base/components/Text';

// Actions
import {get} from "../../actions/calendar";

// Selector
import CalendarItemContainer from '../CalendarItem/CalendarItemContainer';

// Config
import {DOMAIN} from '../../../config';
import {storeConfig} from '../../../storeConfig';

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
                ['', '', '', '']
                // ['2', '3', '4', '5'],
            ],
            hasDate: this.getCurentWeek(),
            widthArr: [100, 150, 200, 100, 100]
        };
    }

    componentDidMount() {
        const {hasDate} = this.state;
        this.getQuery(new Date());
    }

    formatDayByName = (day) => {
        const days = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ bẩy', 'Chủ nhật'];
        return days[day];
    };

    getCurentWeek = (date) => {
        let curr = date ? new Date(date) : new Date();
        let week = [];

        for (let i = 1; i <= 7; i++) {
            let first = curr.getDate() - curr.getDay() + i;
            let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
            week.push(day)
        }
        return week;
    };

    getWeekOfYear = (date) => {
        var d = new Date(+date);
        d.setHours(0,0,0);
        d.setDate(d.getDate()+4-(d.getDay()||7));
        return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
    };

    getQuery = (date) => {
        const url = `${DOMAIN}/stuff/listCalendar.json?type=2&monday=${date.toISOString().slice(0, 10)}&page=1`;
        this.props.getWorkingSchedule(url, this.getWeekOfYear(date));
    };

    onChangeWeekBefore = () => {
        const {hasDate} = this.state;
        var firstDay = new Date(hasDate[0]);
        var nextWeek = new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
        this.setState({hasDate: this.getCurentWeek(nextWeek)});
        this.getQuery(nextWeek);
    };

    onChangeWeekPresent = () => {
        const {hasDate} = this.state;
        this.setState({hasDate: this.getCurentWeek()});
        this.getQuery(new Date());
    };

    onChangeWeekAfter = () => {
        const {hasDate} = this.state;
        var firstDay = new Date(hasDate[0]);
        var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.setState({hasDate: this.getCurentWeek(nextWeek)});
        this.getQuery(nextWeek);
    };

    render() {
        const {hasDate} =this.state;
        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} />
                <View style={styles.content}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={{justifyContent: "center", paddingTop: 30, paddingBottom: 5}}>
                            <MediumText
                                text={`Lịch công tác của cơ quan từ ngày ${hasDate[0]} đến ngày ${hasDate[6]}`}
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
                                        hasDate.map((rowData, index) => {
                                            return (
                                                <TableWrapper style={{flexDirection: 'row'}}>
                                                    <Cell data={[`${this.formatDayByName(index)} \n${rowData}`]} style={{width: 100}} heightArr={[40]} textStyle={styles.text} />
                                                    <CalendarItemContainer date={rowData} />
                                                    {/*<Rows data={this.state.tableData} widthArr={[150, 200, 100, 100]} style={styles.row} textStyle={styles.text}/>*/}
                                                </TableWrapper>
                                            )
                                        })
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

WorkingScheduleScreen.propTypes = {
    document: PropTypes.object,
    navigation: PropTypes.object,
    getWorkingSchedule: PropTypes.func,
};

// function mapStateToProps(state, ownProps) {
//     const {documentId} = ownProps;
//     return {
//         document: getDocument(state, documentId),
//     };
// }

function mapDispatchToProps(dispatch) {
    const stateKeyChild = storeConfig.CalendarWorking;
    return {
        getWorkingSchedule: (url, week) => dispatch(get(url, stateKeyChild, week)),
    };
}

export default connect(null, mapDispatchToProps)(WorkingScheduleScreen);
