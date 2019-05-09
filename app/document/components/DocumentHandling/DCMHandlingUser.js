/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    VirtualizedList
} from 'react-native';

import Text, {MediumText} from '../../../base/components/Text';

class DCMHandlingUser extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {handlingUserDCM, isComma} = this.props;
        const listUser = isComma ? `${handlingUserDCM.get('assigned_to_name')}, ` : handlingUserDCM.get('assigned_to_name');
        const status = handlingUserDCM.get('status');
        return status === '0' ?
            <Text text={listUser} style={{color: '#000000'}}/> :
            <MediumText text={listUser} style={{color: '#000000'}} />
    }
}

DCMHandlingUser.propTypes = {
    handlingUserDCM: PropTypes.object,
};

export default DCMHandlingUser;