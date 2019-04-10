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

import { combineReducers } from 'redux-immutable';

import {storeConfig} from '../storeConfig';

// Auth
import authReducer from '../modules/auth/reducers/auth';

import hasDocumentReducer from '../document/reducers/hasDocument';
import documentReducer from '../document/reducers/document';
import hasDetailDocumentReducer from '../document/reducers/hasDetailDocument';
import detailDocumentReducer from '../document/reducers/detailDocument';
import hasHandlingDCMReducer from '../document/reducers/hasHandlingDocument';
import handlingDCMReducer from '../document/reducers/handlingDocument';

import meReducer from '../modules/users/reducers/me';
import userReducer from '../modules/users/reducers/user';

import submissionReducer from '../phieutrinh/reducers/submission';
import hasSubmissionReducer from '../phieutrinh/reducers/hasSubmission';

import currentReducer from '../ui/reducers/current';

const rootReducer = combineReducers({
    [storeConfig.auth]: authReducer,

    [storeConfig.HasDocument]: hasDocumentReducer,
    [storeConfig.Document]: documentReducer,
    [storeConfig.HasDetailDocument]: hasDetailDocumentReducer,
    [storeConfig.DetailDocument]: detailDocumentReducer,
    [storeConfig.HasHandlingDCM]: hasHandlingDCMReducer,
    [storeConfig.HandlingDCM]: handlingDCMReducer,

    [storeConfig.HasSubmission]: hasSubmissionReducer,
    [storeConfig.Submission]: submissionReducer,

    [storeConfig.Me]: meReducer,
    [storeConfig.User]: userReducer,

    [storeConfig.current]: currentReducer,
});

export default rootReducer;