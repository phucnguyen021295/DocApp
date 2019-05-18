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

import {AsyncStorage} from 'react-native';
import {all, call, take, put} from 'redux-saga/effects';
import {callApi} from '../apis';

// Actions
import {AUTH_UI, objectApi, AUTH_TYPE} from '../actions';
import * as auth from '../actions';
import * as me from '../../users/actions/me';
import * as user from '../../users/actions/user';
import {updateStatusApp} from '../../../ui/actions/current';

// Apis
import {fetchEntity} from '../../../base/apis/fetchEntity';

// Shares
import getAsyncs from '../../../shares/bootstrapAsync';
import {convertToObject} from '../../../shares/convertData';

// config
import {DOMAIN} from '../../../config';

const apiFn = fetchEntity.bind(null, objectApi.login, callApi);

const watchLoginUi = function* watchLoginUi() {
    while (true) { // eslint-disable-line
        const {payload}  = yield take(AUTH_UI.LOGIN);
        const {username, password, url} = payload;

        // const unit = username.split('.')[1];
        const {unit} = yield call(getAsyncs, 'unit');
        const unitObject = convertToObject(unit);
        const data = {
            username: username,
            password,
            unit: unitObject.unit_auth_code  // unitObject.unit_auth_code
        };
        yield call(apiFn, data);
    }
};

const watchLoginSuccess = function* watchLoginSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(AUTH_TYPE.LOGIN.SUCCESS);
        const {payload} = fetchResult;
        AsyncStorage.setItem('token', payload.getIn(['data', 'token']));
        AsyncStorage.setItem('meId', payload.getIn(['data', 'info', 'id']));
        yield put(auth.add(payload));
        yield put(me.add(payload.getIn(['data', 'info', 'id'])));
        yield put(updateStatusApp('isLoginSuccess'));
    }
};

const watchLoginFailure = function* watchLoginFailure() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take( AUTH_TYPE.LOGIN.FAILURE);
        yield put(updateStatusApp('isLoginFalse'));
    }
};

const watchAppStartSuccess = function* watchAppStartSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take('LOGIN_SUCCESS');
        // const {payload} = fetchResult;
        const {meId, unit} = yield call(getAsyncs, 'meId', 'unit');

        // Cập nhật đơn vị
        const unitObject = convertToObject(unit);
        yield put(auth.addUnit(unitObject));

        const url = `${DOMAIN}/user/getuserbyID.json?id=${meId}`;
        yield put(user.get(meId, url));
        yield put(me.add(meId));
    }
};



const getLoginSaga = function* getLoginSaga() {
    yield all([
        call(watchLoginUi),
        call(watchLoginSuccess),
        call(watchAppStartSuccess),
        call(watchLoginFailure),
    ]);
};

export default getLoginSaga;
