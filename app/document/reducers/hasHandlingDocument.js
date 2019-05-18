/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 08/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {fromJS, remove, OrderedSet } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {HANDLING_DOCUMENT} from '../actions/handlingDocument';

const add = (state, action) => {
    const {data, documentId} = action.payload;
    return state.withMutations((stateNew) => {
        let itemIds = OrderedSet([]);
        let action_typeIds = OrderedSet([]);
        let i = 0;
        let action = 1;
        let action_type = null;
        let assigned_date = null;
        data.get('users').map(item => {
            if((item.get('action_type') !== '1' && item.get('action_type') !== action_type) || (item.get('action_type') !== '1' && assigned_date !== item.get('assigned_date'))) {
                stateNew.setIn([documentId, action, 'itemIds'], itemIds);
                action_typeIds = action_typeIds.add(action);
                action++;
                itemIds = OrderedSet([]);
            }
            assigned_date = item.get('assigned_date');
            action_type = item.get('action_type');
            itemIds = itemIds.add(item.get('id'));
        });
        stateNew.setIn([documentId, action, 'itemIds'], itemIds);
        action_typeIds = action_typeIds.add(action);
        stateNew.setIn([documentId, 'action_typeIds'], action_typeIds);
    });
};

const hasHandlingDCMReducer = createReducer(fromJS({}), {
    [HANDLING_DOCUMENT.ADD]: add,
});

export default hasHandlingDCMReducer;
