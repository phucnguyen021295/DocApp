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

import {storeConfig} from '../../storeConfig';

const statePath = [storeConfig.current];

export const getPageByDocument = (state, typeDocument) => state.getIn([...statePath, 'document', typeDocument]);

export const getPageBySubmission = (state) => state.getIn([...statePath, 'submission']);

export const getStatusApp = (state) => state.getIn([...statePath, 'statusApp']);

export const getUnit = (state) => state.getIn([...statePath, 'unit']);

export const getCheckedDept = (state) => state.getIn([...statePath, 'checked', 'department']);

export const getCheckedUser = (state) => state.getIn([...statePath, 'checked', 'user']);

export const getActionType = (state, type) => state.getIn([...statePath, 'action_type', type]);
