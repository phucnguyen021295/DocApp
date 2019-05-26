/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 26/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    Platform,
    Alert,
    Linking,
    Image,
} from 'react-native';

// Components
import Text, {MediumText} from '../../../base/components/Text';

// Share
import convertFile from '../../../shares/convertFile';

import styles from './styles/index.css';
import OpenFile from "react-native-doc-viewer";

class DocumentFile extends Component {
    constructor(props) {
        super(props);
    }

    onAlert = (fileType) => {
        Alert.alert(
            'Thông báo',
            'Ứng dụng của bạn chưa có ứng dụng đọc doc',
            [
                {
                    text: 'Bỏ qua',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'Tải về', onPress: () => Linking.openURL('market://details?id=com.microsoft.office.word')},
            ],
            {cancelable: false},
        );
    };

    onChangeNavigation = () => {
        const {file} = this.props;
        const {fileName, fileType, url} = convertFile(file.get('file_name'));
        if(Platform.OS === 'android') {
            OpenFile.openDoc([{
                url: url, // Local "file://" + filepath
                fileName: fileName,
                cache:true,
                fileType: fileType
            }], (error, url) => {
                if (error) {
                    this.onAlert(fileType);
                } else {
                    this.setState({animating: false});
                    console.log(url)
                }
            })
        } else {
            OpenFile.openDoc([{
                url: url,
                fileName: fileName,
                cache:true,
                fileType: fileType
            }], (error, url) => {
                if (error) {
                    this.onAlert(fileType);
                } else {
                    this.setState({animating: false});
                    console.log(url)
                }
            })
        }
    };

    render() {
        const {file} = this.props;
        const {fileName, fileType} = convertFile(file.get('file_name'));
        const source = fileType === 'pdf' ? require('./styles/images/icon_pdf.png') : require('./styles/images/icon_word.png');
        debugger;
        return (
            <TouchableOpacity onPress={this.onChangeNavigation} style={styles.btn}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Image
                        style={{width: 20, height: 20}}
                        source={source}
                        resizeMode={'contain'}
                    />
                    <Text text={fileName} style={[styles.textTitle]} />
                </View>
            </TouchableOpacity>
        );
    }
}

DocumentFile.propTypes = {
    file: PropTypes.object,
};

export default DocumentFile;
