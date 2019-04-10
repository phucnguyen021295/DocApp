/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 16/05/18.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {AsyncStorage} from 'react-native';

export default async function getAsyncs(...arrayValue) {
    const arr = {};
    for(let i = 0; i < arrayValue.length; i++) {
        arr[arrayValue[i]] = await AsyncStorage.getItem(arrayValue[i]);
    }
    return arr;
}
