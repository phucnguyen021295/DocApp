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

import {put, call} from 'redux-saga/effects';

export const fetchEntity = function* fetchEntity(entity, apiFn, url, original, ...args) {
    yield put(entity.request(original));
    const { response, error } = yield call(apiFn, url);
    if (response) {
        yield put(entity.success(original, response));
    } else {
        yield put(entity.failure(original, error));
    }
};