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
import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Text from '../../../base/components/Text';

// Styles
import styles from './styles/index.css';

class DocumentEvent extends Component {
    constructor(props) {
        super(props);
    }

    onSuccess = () => {
        alert("Chuc nang dang phat trien");
    };

    onChangeDoc = () => {
        alert("Chuc nang dang phat trien");
    };

    onRevoke = () => {
        alert("Chuc nang dang phat trien");
    };

    render() {
        const {isBtnBack, title} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.onChangeDoc}
                >
                    <Text text={"Chuyển văn bản"} style={{color: 'gray'}} />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.onSuccess}
                >
                    <Text text={"Hoàn thành"} style={{color: 'gray'}} />
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity
                    style={[styles.btn, {backgroundColor: '#751a0f'}]}
                    onPress={this.onRevoke}
                >
                    <Text text={"Thu Hồi"} style={{color: '#ffffff'}} />
                </TouchableOpacity>
            </View>
        );
    }
}

DocumentEvent.propTypes = {
    title: PropTypes.string,
    isBtnBack: PropTypes.bool,
};

export default DocumentEvent;
