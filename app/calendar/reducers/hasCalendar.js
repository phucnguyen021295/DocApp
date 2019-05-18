/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {fromJS, remove, OrderedSet } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {CALENDAR} from '../actions/calendar';

const add = (state, action) => {
    const {data, stateKeyChild, week} = action.payload;
    debugger;
    return state.withMutations((stateNew) => {
        let itemIds = OrderedSet([]);
        let i = 0;
        debugger;
        data.get('list').map(item => {
            itemIds = itemIds.add(i);
            i++
        });
        stateNew.setIn([stateKeyChild, week], itemIds)
    });
};

const hasCalendarReducer = createReducer(fromJS({}), {
    // [CALENDAR.ADD]: add,
});

export default hasCalendarReducer;
