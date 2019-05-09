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
    View,
} from 'react-native';
import ListDeptJobUserContainer from '../DeptJobUser/ListDeptJobUserContainer';
import DepartmentContainer from '../Department/DepartmentContainer';


class DepartmentChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChildren: false,
            isExpand: false,
            isCheckBox: false,
        };
        this.onRendered = this.onRendered.bind(this);
    }

    onShowChild = () => {
        const {isExpand} = this.state;
        this.setState({
            isExpand: !isExpand,
        });
    };

    onRendered(size) {
        this.setState({
            hasChildren: size > 0,
        });
    }

    onCheckbox = () => {
        const {isCheckBox} = this.state;
        this.setState({isCheckBox: !isCheckBox})
    };

    render() {
        const {departmentId, navigationApp} = this.props;
        const {hasChildren, isExpand, isCheckBox} = this.state;
        return (
            <View>
                <DepartmentContainer
                    navigationApp={navigationApp}
                    departmentId={departmentId}
                    onShowChild={this.onShowChild}
                    onCheckbox={this.onCheckbox}
                />
                <View style={[{marginLeft: 32}]}>
                    {
                        isExpand ? <ListDeptJobUserContainer departmentId={departmentId} navigationApp={navigationApp} isCheckBoxParent={isCheckBox}/> : null
                    }
                </View>
            </View>
        );
    }
}

DepartmentChild.propTypes = {
    departmentId: PropTypes.string,
    navigationApp: PropTypes.object,
};

export default DepartmentChild;
