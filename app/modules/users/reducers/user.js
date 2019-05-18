/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 31/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {fromJS, Map } from 'immutable';
import createReducer from '../../../base/reducers/createReducer';

import {USER} from '../actions/user';

const add = (state, action) => {
    const {data} = action.payload;
    return state.withMutations((stateNew) => {
        const id = data.getIn(['user', 'id']);
        stateNew.mergeDeep(Map([[id, data.get('user')]]));
    });
};

const userReducer = createReducer(fromJS({}), {
    [USER.ADD]: add,
});

export default userReducer;
