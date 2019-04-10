/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 06/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {all, call, take, put} from 'redux-saga/effects';
import {OBJECT_UI, objectApi, OBJECT_TYPE} from '../../base/apis/actionApi';
import {fetchEntity} from '../../base/apis/fetchEntity';

import {add} from '../actions/submission';

const isGetListSubmissionSuccess = function isGetListSubmissionSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET_LIST.SUCCESS &&  action.original.actionKey === 'subUi.getList';
};

const watchGetListSubmissionSuccess = function* watchGetListSubmissionSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetListSubmissionSuccess);
        const {payload, original} = fetchResult;
        const {stateKeyChild} = original;
        debugger;
        yield put(add(payload, stateKeyChild));
    }
};

const getSubmissionSaga = function* getSubmissionSaga() {
    yield all([
        call(watchGetListSubmissionSuccess),
    ]);
};

export default getSubmissionSaga;