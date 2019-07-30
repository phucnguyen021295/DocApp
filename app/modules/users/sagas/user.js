/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 08/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {OBJECT_TYPE} from "../../../base/apis/actionApi";
import {all, call, put, take} from "redux-saga/effects";
import * as actionUser from "../actions/user";

const isGetUserSuccess = function isGetUserSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET.SUCCESS &&  action.original.actionKey === 'user.get';
};

const watchGetUserSuccess = function* watchGetUserSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetUserSuccess);
        const {payload, original} = fetchResult;
        debugger;
        yield put(actionUser.add(payload));
    }
};

const getUserSaga = function* getUserSaga() {
    yield all([
        call(watchGetUserSuccess),
    ]);
};

export default getUserSaga;

