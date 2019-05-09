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

class DeptJobUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusDrop: false,
            isCheckBox: props.isCheckBoxParent,
            isBtnChecked: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.isCheckBoxParent !== nextProps.isCheckBoxParent) {
            this.setState({isCheckBox: nextProps.isCheckBoxParent})
        }
    }

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
        const {isCheckBox} = this.state;
        this.setState({isCheckBox: !isCheckBox});
    };

    onChecked = () => {
        const {user, updateChecked} = this.props;
        const {isBtnChecked} = this.state;
        this.setState({isBtnChecked: !isBtnChecked});
        updateChecked('user', user.get('id'));
    };

    render() {
        const {user, checkedUser} = this.props;
        const {statusDrop, isCheckBox, isBtnChecked} = this.state;
        const isChecked = checkedUser && checkedUser === user.get('id') ? true : false;
        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={1} style={[styles.groupItem]}>
                    <Icons name={'indeterminate-check-box'} size={16} color={'#000000'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={this.onCheckbox} style={[styles.groupItem]}>
                    <Icons name={isCheckBox ? 'check-box' : 'check-box-outline-blank'} size={16} color={'#000000'} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={this.onChecked} style={[styles.groupItem]}>
                    <Icons name={isChecked ? 'radio-button-checked' : 'radio-button-unchecked'} size={16} color={'#000000'} />
                </TouchableOpacity>
                <Text text={user.get('fullname')} />
                <Text text={user.get('title_name')} style={{marginLeft: 10,fontSize: 12}} />
            </View>
        );
    }
}

DeptJobUser.propTypes = {
    user: PropTypes.object,
    navigationApp: PropTypes.object,
    onShowChild: PropTypes.func,
    isCheckBoxParent: PropTypes.bool,
    checkedUser: PropTypes.string,
    updateChecked: PropTypes.func,
};

export default withNavigation(DeptJobUser);

