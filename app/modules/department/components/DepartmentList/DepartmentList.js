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

// Component
import Text from '../../../../base/components/Text';
import DepartmentChild from './DepartmentChild';

import * as color from '../../../../shares/styles/color/index';

import styles from "../DeptJobUser/styles/index.css";

const {height} = Dimensions.get('window');

class DepartmentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            textDate: ''
        };
    }

    componentDidMount() {
        const {groupIds, onRendered} = this.props;
        // onRendered(groupIds.size);
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
        const textDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        this.setState({textDate: textDate});
        // this.hideDateTimePicker();
    };

    onChangeDate = (date) => {
        this.setState({textDate: date});
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
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    style={{borderWidth: 1, borderColor: 'gray', marginHorizontal: 5}}
                />
                <View style={{flexDirection: 'row', marginLeft: 5, marginVertical: 15}}>
                    <TouchableOpacity style={{paddingHorizontal: 12, paddingVertical: 6, backgroundColor: color.colorBlue}}>
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
    navigationApp: PropTypes.object,
    onRendered: PropTypes.func,
};

DepartmentList.defaultProps = {
    departmentIds: OrderedSet(),
    onRendered: () => {},
};


export default DepartmentList;
