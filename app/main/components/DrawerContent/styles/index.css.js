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
        backgroundColor: color.colorBlue1,
    },
    headerContainer: {
        height: 46,
        backgroundColor: color.colorBlue,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: {
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20
    },
    btnBack: {
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    btnDraw: {
        height: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'gray'
    }

});

export  default styles
