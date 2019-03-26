/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 07/07/18.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './styles/index.css';

const OpenSansText = ({text, style, ...otherProps}) => <Text {...otherProps} style={[styles.fontSkin, style]}>{text}</Text>;

OpenSansText.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
};

export default OpenSansText;
