/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 18/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {createActionNoAppID} from '../../base/actions';
import {objectUI} from '../../base/apis/actionApi';
import assignToHisApi from '../apis/assignTohisApi';
import * as assignTohisSelectors from '../selectors/assignTohisSelectors';

export const ASSIDNTOHIS = {
    ADD: 'ADD_ASSIDNTOHIS',
    UPDATE_STATUS: 'UPDATE_STATUS_ASSIDNTOHIS',
};

export const add = (data) => createActionNoAppID(ASSIDNTOHIS.ADD, {data});
export const updateStstus = (data, documentId) => createActionNoAppID(ASSIDNTOHIS.UPDATE_STATUS, {data, documentId});

export const get = (url) => {
    return objectUI.getUi(
        null,
        {
            url: url,
            selector: assignTohisSelectors,
            api: assignToHisApi,
            actionKey: 'assignUi.get',
            // stateKeyChild: stateKeyChild
        }
    );
};
