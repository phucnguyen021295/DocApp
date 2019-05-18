/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 12/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icons from 'react-native-vector-icons/MaterialIcons';

// Component
import Text from '../../../../base/components/Text';

import styles from './styles/index.css';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusDrop: false,
            isCheckBox: false,
            isBtnChecked: false,
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     const {checkedDept, departmentId} = this.props;
    //     debugger;
    //     if(checkedDept !== nextProps.checkedDept && nextProps.checkedDept !== departmentId) {
    //         debugger;
    //         this.setState({isBtnChecked: nextProps.checkedDept ? nextProps.checkedDept : false})
    //     }
    // }

    onPress = () => {
        const {group} = this.props;
        // const groupId = group.getIn(['data', 'id']);
        // this.props.navigationApp.navigate('DetailGroupScreen', {groupId});
    };

    onShowChild = () => {
        const {onShowChild} = this.props;
        const {statusDrop} = this.state;
        this.setState({statusDrop: !statusDrop});
        onShowChild();
    };

    onCheckbox = () => {
        const {onCheckbox, updateCheckBoxByDept, meId, department} = this.props;
        const {isCheckBox} = this.state;
        this.setState({isCheckBox: !isCheckBox});
        onCheckbox();

        let userIds = [];
        department.get('data').map(item => userIds.push(item.get('id')));

        updateCheckBoxByDept(meId, userIds)
    };

    onChecked = () => {
        const {departmentId, department} = this.props;
        const {isBtnChecked} = this.state;
        this.setState({isBtnChecked: !isBtnChecked});
        this.props.updateChecked('department', departmentId, department.get('dep_name'));
    };

    render() {
        const {department, checkedDept, departmentId} = this.props;
        const {statusDrop, isCheckBox, isBtnChecked} = this.state;
        const isChecked = checkedDept && checkedDept === departmentId ? true : false;
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={1} onPress={this.onShowChild} style={styles.groupItem}>
                    <Icons name={statusDrop ? 'expand-less' : 'expand-more'} size={16} color={'#000000'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={this.onCheckbox} style={[styles.groupItem]}>
                    <Icons name={isCheckBox ? 'check-box' : 'check-box-outline-blank'} size={16} color={'#000000'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={this.onChecked} style={[styles.groupItem]}>
                    <Icons name={isChecked ? 'radio-button-checked' : 'radio-button-unchecked'} size={16} color={'#000000'} />
                </TouchableOpacity>
                <Text text={department.get('dep_name')} style={{marginLeft: 10, alignItems: 'center'}} />
            </View>
        );
    }
}

Department.propTypes = {
    departmentId: PropTypes.string,
    department: PropTypes.object,
    updateChecked: PropTypes.func,
    navigationApp: PropTypes.object,
    onShowChild: PropTypes.func,
    onCheckbox: PropTypes.func,
    checkedDept: PropTypes.bool,
    updateCheckBoxByDept: PropTypes.func,
    meId: PropTypes.String,
};


export default withNavigation(Department);

