/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 05/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {fromJS, OrderedSet } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {SUBMISSION} from '../actions/submission';

const add = (state, action) => {
    const {data, stateKeyChild} = action.payload;
    let itemIds = OrderedSet([]);
    data.get('data').map(item => {
        const id = item.get('id');
        itemIds = itemIds.add(id);
    });
    const page = data.getIn(['pages', 'current']).toString();
    return state.setIn([page, 'itemIds',], itemIds).
    setIn([page, 'items'], data.get('pages'));
};

const hasSubmissionReducer = createReducer(fromJS({}), {
    [SUBMISSION.ADD]: add,
});

export default hasSubmissionReducer;
