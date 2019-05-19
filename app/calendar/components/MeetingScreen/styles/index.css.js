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

import {StyleSheet} from 'react-native';
import * as color from '../../../../shares/styles/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.colorBlue1
    },
    content: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    contentContainer: {
        // flex: 1,
        // flexDirection: "column"
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { textAlign: 'center', fontWeight: '100' },
    header: { height: 40, backgroundColor: color.colorBlue, color: '#ffffff' },
    dataWrapper: { marginTop: -1 },
    row: { height: 'auto', backgroundColor: '#E7E6E1', minHeight: 40 },
    textBtn: {
        color: "gray",
        fontSize: 14,
    },
    space: {
        paddingHorizontal: 6
    },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
});

export default styles;
