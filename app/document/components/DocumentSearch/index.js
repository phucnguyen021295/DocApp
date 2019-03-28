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
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Text from '../../../base/components/Text';

// Styles
import styles from './styles/index.css';

class DocumentSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }

    onChangeText = (textSearch) => {
        this.setState({textSearch});
    };

    onSearch = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.onChangeText}
                    value={this.state.textSearch}
                    placeholder="Tìm kiếm trích yếu, số hiệu văn bản"
                    placeholderTextColor="#bbbbbb"
                />
                <TouchableOpacity
                    style={styles.btnSearch}
                    onPress={this.onSearch}
                >
                    <Ionicons
                        name={Platform.OS === 'ios' ? "ios-search" : "md-search"}
                        size={24}
                        color={"#ffffff"}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

DocumentSearch.propTypes = {
};

export default DocumentSearch;