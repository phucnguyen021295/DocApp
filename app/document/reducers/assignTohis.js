/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 18/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {fromJS, Map } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {ASSIDNTOHIS} from '../actions/assignTohis';

// import documentDefault from './document.default';

const add = (state, action) => {
    const {data} = action.payload;
    return state.withMutations((stateNew) => {
        data.get('list').map(item => {
            const id = item.get('doc_id');
            stateNew.mergeDeep(Map([[id, item]]));
        })
    });
};

const assignToHisReducer = createReducer(fromJS({}), {
    [ASSIDNTOHIS.ADD]: add,
});

export default assignToHisReducer;
