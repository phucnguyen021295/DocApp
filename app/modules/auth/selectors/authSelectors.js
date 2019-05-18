/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {storeConfig} from '../../../storeConfig';

const statePath = [storeConfig.auth];

export const getInfoAuth = (state, documentId) => state.getIn([...statePath, 'data', 'info']);

export const getUnit = (state) => state.getIn([...statePath, 'unit']);

export const getUnitCode = (state, key) => state.getIn([...statePath, 'unit', 'unit_code']);

export const getUnitAuthCode = (state) => state.getIn([...statePath, 'unit', 'unit_auth_code']);

export const getUnitLink = (state, key) => state.getIn([...statePath, 'unit', 'unit_link']);
