/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {all, call, take, put} from 'redux-saga/effects';
import {OBJECT_UI, objectApi, OBJECT_TYPE} from '../../../base/apis/actionApi';
// import {fetchEntity} from '../../../base/apis/fetchEntity';

import * as dpmUserAction from '../actions/departmentUser';

// Get vawn banr xuwr lys
const isGetHandlingDoccumentSuccess = function isGetHandlingDoccumentSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET.SUCCESS && action.original.actionKey === 'dpmUserUi.get';
};

const watchGetHandlingDocumentSuccess = function* watchGetHandlingDocumentSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetHandlingDoccumentSuccess);
        const {payload, original} = fetchResult;
        debugger;
        const {user} = original;
        yield put(dpmUserAction.add(payload, documentId));
    }
};

const getDocumentSaga = function* getDocumentSaga() {
    yield all([

        call(watchGetHandlingDocumentSuccess),
    ]);
};

export default getDocumentSaga;