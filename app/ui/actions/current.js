/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 05/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import createActionNoAppID from '../../base/actions/createActionNoAppID';
import {fromJS} from 'immutable';

export const CURRENT = {
    UPDATE_PAGE_DOCUMENT: 'UPDATE_PAGE_DOCUMENT_CURRENT',
    UPDATE_PAGE_SUBMISSION: 'UPDATE_PAGE_SUBMISSION_CURRENT',
    UPDATE_STATUS_APP: 'UPDATE_STATUS_APP_CURRENT',
    UPDATE_UNIT: 'UPDATE_UNIT_CURRENT',
    UPDATE_CHECKED: 'UPDATE_CHECKED_CURRENT',
};

export const updatePageDocument = (type, page) => createActionNoAppID(CURRENT.UPDATE_PAGE_DOCUMENT, {type, page});

export const updatePageSubmission = (page) => createActionNoAppID(CURRENT.UPDATE_PAGE_SUBMISSION, {page});

export const updateStatusApp = (statusApp) => createActionNoAppID(CURRENT.UPDATE_STATUS_APP, {statusApp});

export const updateUnit = (unit) => createActionNoAppID(CURRENT.UPDATE_UNIT, {unit: fromJS(unit)});

export const updateChecked = (keyStore, id) => createActionNoAppID(CURRENT.UPDATE_CHECKED, {keyStore, id});
