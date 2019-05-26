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

import {fromJS, Map, OrderedSet } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {CURRENT} from '../actions/current';
import uiStateDefault from './current.default';

const updatePageDocument = (state, action) => {
    const { page, type } = action.payload;
    return state.setIn(['document', type], page);
};

const updatePageSubmission = (state, action) => {
    const { page } = action.payload;
    return state.setIn(['submission'], page);
};

const updateStatusApp = (state, action) => {
    const { statusApp } = action.payload;
    return state.set('statusApp', statusApp);
};

const updateUnit = (state, action) => {
    const { unit } = action.payload;
    return state.set('unit', unit);
};

const updateChecked = (state, action) => {
    const { keyStore, id, name } = action.payload;
    const checked = state.getIn(['checked', keyStore]);
    if(checked && checked === id) {
        return state.set('checked', fromJS({}));
    }
    if(!keyStore) {
        return state.set('checked', fromJS({}));
    }
    const data = fromJS({id, name});
    return state.setIn(['checked'], Map([[keyStore, data]]));
};

const updateCheckBoxByDept = (state, action) => {
    const { meId, userIds} = action.payload;
    let itemIds = state.getIn(['checkBox', meId, 'itemIds']) || OrderedSet([]);
    userIds.map(item => {
        if(itemIds.includes(item)) {
            itemIds = itemIds.remove(item);
        } else {
            itemIds = itemIds.add(item);
        }
    });
    return state.setIn(['checkBox', meId, 'itemIds'], itemIds);
};

const updateSearchDoc = (state, action) => {
    const { keySearch } = action.payload;
    return state.set('seachDoc', keySearch);
};

const uiStateReducer = createReducer(fromJS(uiStateDefault), {
    [CURRENT.UPDATE_PAGE_DOCUMENT]: updatePageDocument,
    [CURRENT.UPDATE_PAGE_SUBMISSION]: updatePageSubmission,
    [CURRENT.UPDATE_STATUS_APP]: updateStatusApp,
    [CURRENT.UPDATE_UNIT]: updateUnit,
    [CURRENT.UPDATE_CHECKED]: updateChecked,
    [CURRENT.UPDATE_CHECKBOX]: updateCheckBoxByDept,
    [CURRENT.UPDATE_SEARCH_DOC]: updateSearchDoc,
});

export default uiStateReducer;
