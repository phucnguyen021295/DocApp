/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {OBJECT_TYPE} from "../../base/apis/actionApi";
import {all, call, put, take} from "redux-saga/effects";
import * as actioncalendar from "../actions/calendar";

const isGetCalendarSuccess = function isGetCalendarSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET.SUCCESS &&  action.original.actionKey === 'calendar.get';
};

const watchGetCalendarSuccess = function* watchGetCalendarSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetCalendarSuccess);
        const {payload, original} = fetchResult;
        const {week, stateKeyChild} = original;
        yield put(actioncalendar.add(payload, stateKeyChild, week));
    }
};

const getCalendarSaga = function* getCalendarSaga() {
    yield all([
        call(watchGetCalendarSuccess),
    ]);
};

export default getCalendarSaga;
