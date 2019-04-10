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

import createActionNoAppID from './createActionNoAppID';
import {fromJS} from 'immutable';

export default function createRequestActions(base) {
    return {
        request: (original) => createActionNoAppID(`${base}_REQUEST`, original),
        success: (original, response) => createActionNoAppID(`${base}_SUCCESS`, fromJS(response), original),
        failure: (original, error) => createActionNoAppID(`${base}_FAILURE`, error, original),
    };
}