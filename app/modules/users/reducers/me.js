/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {fromJS, remove } from 'immutable';
import createReducer from '../../../base/reducers/createReducer';

import {ME} from '../actions/me';

const add = (state, action) => {
    const {meId} = action.payload;
    return state.set('id', meId);
};

const meReducer = createReducer(fromJS({}), {
    [ME.ADD]: add,
});

export default meReducer;