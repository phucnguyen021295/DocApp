/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 03/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {createActionNoAppID, createRequestActions, createFetchTypes} from '../../../base/actions';

export const AUTH = {
    ADD: 'ADD_AUTH',
    ADD_UNIT: 'ADD_UNIT_AUTH',
};

export const add = (data) => createActionNoAppID(AUTH.ADD, {data});
export const addUnit = (unit) => createActionNoAppID(AUTH.ADD_UNIT, {unit});

export const AUTH_UI = {
    LOGIN: 'LOGIN_UI'
};

const AUTH_API = {
    LOGIN: 'LOGIN_API'
};

export const AUTH_TYPE = {
    LOGIN: createFetchTypes(AUTH_API.LOGIN),
};

const loginUi = (username, password) => {
    return createActionNoAppID(AUTH_UI.LOGIN, {username, password});
};

const login = createRequestActions(AUTH_API.LOGIN);

export const objectUI = {
    loginUi
};

export const objectApi = {
    login
};
