/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 12/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    groupItem: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleItem: {
        // fontFamily: 'Open Sans_700',
        // fontWeight: '600',
        fontSize: 17,
        color: '#000000',
    },
    imageItem: {
        width: 40,
        height: 40,
        borderRadius: 6,
    },
    summaryGroup: {
        flexDirection: 'column',
        paddingLeft: 15,
        justifyContent: 'center',
    },
});

export default styles;
