/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author anhnhf@bkav.com on 09/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OrderedSet } from 'immutable';
import {
    VirtualizedList,
    View,
    TextInput, TouchableOpacity,
    Button,
    Dimensions,
    ScrollView
} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icons from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';

// Component
import Text from '../../../../base/components/Text';
import DepartmentChild from './DepartmentChild';

import * as color from '../../../../shares/styles/color/index';

import {DOMAIN} from '../../../../config';

import styles from "../DeptJobUser/styles/index.css";

const {height} = Dimensions.get('window');

class DepartmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            textDate: '',
            expired_at: new Date(),
            notes: props.notes,
        };
    }

    componentDidMount() {
        const {groupIds, onRendered} = this.props;
        // onRendered(groupIds.size);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.notes !== this.props.notes) {
            this.setState({notes: nextProps.notes});
        }
    }

    componentWillUnmount() {
        this.props.removeChecked(null);
    }

    _keyExtractor = (groupId) => groupId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (obj) => (
        <DepartmentChild departmentId={obj.item} navigationApp={this.props.navigationApp} />
    );

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = (date) => {
        const textDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        this.setState({textDate: textDate, expired_at: date});
        // this.hideDateTimePicker();
    };

    onChangeDate = (date) => {
        this.setState({textDate: date});
    };

    getsAsigned_to = (userIds) => {
        let assigned_to = '';
        userIds.map(userId => {
            if(assigned_to === '') {
                assigned_to = `${assigned_to}${userId}`
            } else {
                assigned_to = `${assigned_to},${userId}`
            }
        });
        return assigned_to;
    };

    onTransferText = () => {
        const {userIds, documentId} = this.props;
        const { textDate, notes} = this.state;
        const url =`${DOMAIN}/document/assign.json`;
        const data = {
            doc_id: documentId,
            action_type: 3,
            status: 1,
            assigned_to: this.getsAsigned_to(userIds),
            expired_at: textDate,
            notes: notes
        };
        this.props.transferText(url, documentId, data);
        debugger;
        this.props.navigation.replace('AppStack');
    };

    onChangeText = (text) => {
        this.setState({notes: text})
    };

    render() {
        const {departmentIds} = this.props;
        return (
            <View style={{paddingLeft: 8, flex: 1}}>
                <VirtualizedList
                    data={departmentIds.size > 0 && departmentIds.toList()}
                    renderItem={this.renderItem}
                    getItemCount={this.getItemCount}
                    getItem={this.getItem}
                    keyExtractor={this._keyExtractor}
                    style={{height: height - 350}}
                    // contentContainerStyle={{height: height - 350}}
                />
                <View style={{flexDirection: 'row', marginLeft: 5, marginVertical: 15, alignItems: 'center'}}>
                    <Text text={'Ngày hết hạn: '} style={{color: '#000000'}} />
                    <TextInput
                        style={{height: 30, borderColor: 'gray', borderWidth: 1, width: 130, color: '#000000', paddingVertical: 5}}
                        onChangeText={this.onChangeDate}
                        value={this.state.textDate}
                    />
                    <TouchableOpacity onPress={this.showDateTimePicker} >
                        <Icons name={'date-range'} style={{color: color.colorBlue}} size={25} />
                    </TouchableOpacity>
                </View>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
                <TextInput
                    multiline = {true}
                    numberOfLines = {4}
                    textAlignVertical={'top'}
                    onChangeText={this.onChangeText}
                    value={this.state.notes}
                    style={{borderWidth: 1, borderColor: 'gray', marginHorizontal: 5}}
                />
                <View style={{flexDirection: 'row', marginLeft: 5, marginVertical: 15}}>
                    <TouchableOpacity onPress={this.onTransferText} style={{paddingHorizontal: 12, paddingVertical: 6, backgroundColor: color.colorBlue}}>
                        <Text text={'Chuyển Văn Bản'} style={{color: '#FFFFFf', flexWrap:'wrap'}} />
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft: 5, marginBottom: 15}}>
                    <Text text={'Ghi chú: '} style={{color: '#000000'}} />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icons name={'check-box-outline-blank'} size={16} color={'#000000'} />
                        <Text text={'  Chọn cán bộ muốn chuyển văn bản'} />
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icons name={'radio-button-unchecked'} size={16} color={'#000000'} />
                        <Text text={'  CHọn cán bộ là người chủ trì văn bản'} />
                    </View>
                </View>
            </View>
        );
    }
}

DepartmentList.propTypes = {
    departmentIds: PropTypes.object,
    getList: PropTypes.func,
    updateIsSeeMore: PropTypes.func,
    navigation: PropTypes.object,
    onRendered: PropTypes.func,
    userIds: PropTypes.array,
    documentId: PropTypes.String,
    transferText: PropTypes.func,
    notes: PropTypes.String,
    removeChecked: PropTypes.func,
};

DepartmentList.defaultProps = {
    departmentIds: OrderedSet(),
    onRendered: () => {},
};


export default withNavigation(DepartmentList);
