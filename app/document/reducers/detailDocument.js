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

import {fromJS, remove, Map } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {DETAIL_DOCUMENT} from '../actions/detailDocument';

// import documentDefault from './document.default';

const add = (state, action) => {
    const {data} = action.payload;
    return state.withMutations((stateNew) => {
        let i = 0;
        data.get('document').map(item => {
            stateNew.mergeDeep(Map([[i, item]]));
            i++;
        })

    });
};

const detailDocumentReducer = createReducer(fromJS({}), {
    [DETAIL_DOCUMENT.ADD]: add,
});

export default detailDocumentReducer;