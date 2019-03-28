/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 28/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {createActionNoAppID, createRequestActions, createFetchTypes} from '../actions';
// import checkPropertiesIsRequired from '../utils/checkPropertiesIsRequired';
// import convertToImmutableJs from '../utils/convertToImmutableJs';

export const OBJECT_API = {
    GET: 'OBJECT_GET_API',
    GET_LIST: 'OBJECT_GET_LIST_API',
    POST: 'OBJECT_POST_API',
    PUT: 'OBJECT_PUT_API',
    PATCH: 'OBJECT_PATCH_API',
    DELETE: 'OBJECT_DELETE_API',
};

export const OBJECT_TYPE = {
    GET: createFetchTypes(OBJECT_API.GET),
    GET_LIST: createFetchTypes(OBJECT_API.GET_LIST),
    POST: createFetchTypes(OBJECT_API.POST),
    PUT: createFetchTypes(OBJECT_API.PUT),
    PATCH: createFetchTypes(OBJECT_API.PATCH),
    DELETE: createFetchTypes(OBJECT_API.DELETE),
};

export const OBJECT_UI = {
    GET: 'OBJECT_GET_UI',
    GET_LIST_UI: 'OBJECT_GET_LIST_UI',
    POST_UI: 'OBJECT_POST_UI',
    PUT_UI: 'OBJECT_PUT_UI',
    PATCH_UI: 'OBJECT_PATCH_UI',
    DELETE_UI: 'OBJECT_DELETE_UI',
};

const getUi = (payload, condition) => {
    return createActionNoAppID(OBJECT_UI.GET, payload, null, condition);
};

const get = createRequestActions(OBJECT_API.GET);

const getListUi = (payload, condition) => {
    return createActionNoAppID(OBJECT_UI.GET_LIST_UI, payload, null, condition);
};

const getList = createRequestActions(OBJECT_API.GET_LIST);

const postUi = (payload, condition) => {
    return createActionNoAppID(OBJECT_UI.POST_UI, payload, null, condition);
};

const post = createRequestActions(OBJECT_API.POST);

export const objectUI = {
    getUi,
    getListUi
};

export const objectApi = {
    get,
    getList
};