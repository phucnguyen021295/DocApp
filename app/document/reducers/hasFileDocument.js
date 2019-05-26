/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {fromJS, remove, OrderedSet } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {FILE_DOCUMENT} from '../actions/fileDocument';

const add = (state, action) => {
    const {data, documentId} = action.payload;
    return state.withMutations((stateNew) => {
        let itemIds = OrderedSet([]);
        data.get('users').map(item => {
            itemIds = itemIds.add(item.get('id'));
        });
        stateNew.setIn([documentId, 'itemIds'], itemIds)
    });
};

const hasFileDocumentReducer = createReducer(fromJS({}), {
    [FILE_DOCUMENT.ADD]: add,
});

export default hasFileDocumentReducer;
