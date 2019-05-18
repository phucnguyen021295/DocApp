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

import authSaga from '../modules/auth/sagas';
import userSagas from '../modules/users/sagas/user';
import documentSaga from '../document/sagas/documentSaga';
import submissionSaga from '../phieutrinh/sagas/submission';
import calendarSaga from '../calendar/sagas/calendar';
import departmentSaga from '../modules/department/sagas/department';

const getRouterSaga = function* getRouterSaga() {
    yield all([
        call(authSaga),
        call(userSagas),
        call(documentSaga),
        call(submissionSaga),
        call(calendarSaga),
        call(departmentSaga),
    ]);
};

export default getRouterSaga;
