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

import {OrderedSet} from 'immutable';

import {storeConfig} from '../../storeConfig';

const statePath = [storeConfig.current];

export const getPageByDocument = (state, typeDocument) => state.getIn([...statePath, 'document', typeDocument]);

export const getPageBySubmission = (state) => state.getIn([...statePath, 'submission']);

export const getStatusApp = (state) => state.getIn([...statePath, 'statusApp']);

export const getUnit = (state) => state.getIn([...statePath, 'unit']);

export const getCheckedDept = (state) => state.getIn([...statePath, 'checked', 'department', 'id']);

export const getCheckedUser = (state) => state.getIn([...statePath, 'checked', 'user', 'id']);

export const getActionType = (state, type) => state.getIn([...statePath, 'action_type', type]);

export const getCheckBoxByDept = (state, meId) => {
    return state.getIn([...statePath, 'checkBox', meId]) ? state.getIn([...statePath, 'checkBox', meId, 'itemIds']) : OrderedSet([]);
};

export const getNotes = (state) => {
    if(state.getIn([...statePath, 'checked', 'department'])) {
        debugger;
        const departmentName = state.getIn([...statePath, 'checked', 'department', 'name']);
        return `Phòng/ban ${departmentName} chủ trì, các đơn vị, phòng, ban liên quan phối hợp.`;
    } else if(state.getIn([...statePath, 'checked', 'user'])) {
        const UserName = state.getIn([...statePath, 'checked', 'user', 'name']);
        return `Đ/c ${UserName} chủ trì, các đ/c liên quan phối hợp xử lý.`
    }
    return '';
};
