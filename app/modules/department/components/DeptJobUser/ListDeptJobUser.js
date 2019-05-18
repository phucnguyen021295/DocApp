/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/03/19.
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
import DeptJobUserContainer from './DeptJobUserContainer';


class ListDeptJobUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasChildren: false,
            isExpand: false,
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

    render() {
        const {department, navigationApp, isCheckBoxParent} = this.props;
        const {hasChildren, isExpand} = this.state;
        return (
            <View>
                {
                    department && department.get('data').map((data, index) => {
                        return (
                            <DeptJobUserContainer key={index} user={data} isCheckBoxParent={isCheckBoxParent} />
                        )
                    })
                }
            </View>
        );
    }
}

ListDeptJobUser.propTypes = {
    department: PropTypes.object,
    navigationApp: PropTypes.object,
    isCheckBoxParent: PropTypes.boolean
};

export default ListDeptJobUser;
