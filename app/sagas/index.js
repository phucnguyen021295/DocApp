/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 20/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {all, call, take} from 'redux-saga/effects';
import {callApi} from '../base/apis/callApi';
import {OBJECT_UI, objectApi, OBJECT_TYPE} from '../base/apis/actionApi';
import {fetchEntity} from '../base/apis/fetchEntity';


const apiFn = fetchEntity.bind(null, objectApi.get, callApi);

const watchGetObject = function* watchGetObject() {
    while (true) { // eslint-disable-line
        const {payload}  = yield take(OBJECT_UI.GET);
        const {options} = payload;
        debugger;
        yield call(apiFn, options);
        // yield put(ActionTypes.action(ActionTypes.LOAD_PAGES));
        // yield put(ActionTypes.action(ActionTypes.DESELECT_PAGES));
    }
};

const watchGetObjectSuccess = function* watchGetObjectSuccess() {
    while (true) { // eslint-disable-line
        const payload = yield take(OBJECT_TYPE.GET.SUCCESS);
        debugger;
        // yield put(ActionTypes.action(ActionTypes.LOAD_PAGES));
        // yield put(ActionTypes.action(ActionTypes.DESELECT_PAGES));
    }
};


const getRouterSaga = function* getRouterSaga() {
    yield all([
        call(watchGetObject),
        call(watchGetObjectSuccess),
    ]);
};

export default getRouterSaga;