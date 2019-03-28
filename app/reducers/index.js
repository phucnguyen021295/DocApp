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

import hasDocumentReducer from '../document/reducers/hasDocument';
import documentReducer from '../document/reducers/document';
import ui from './ui';

const rootReducer = combineReducers({
    'ui': ui,
    'HasDocument': hasDocumentReducer,
    'Document': documentReducer
});

export default rootReducer;