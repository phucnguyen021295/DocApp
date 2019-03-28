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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomColor: '#bbbbbb',
        borderBottomWidth: 1
    },
    textInput: {
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    btnSearch: {
        position: 'absolute',
        right: 15,
        bottom: 5,
        width: 40,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        lineHeight: 25
    }
});

export default styles;