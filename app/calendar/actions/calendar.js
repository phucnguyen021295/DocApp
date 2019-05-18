/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {createActionNoAppID} from '../../base/actions';
import {objectUI} from '../../base/apis/actionApi';
import calendarApi from '../apis/calendarApi';
import calendarSelectors from '../selectors/calendarSelectors';

export const CALENDAR = {
    ADD: 'ADD_CALENDAR'
};

export const add = (data, stateKeyChild, week) => createActionNoAppID(CALENDAR.ADD, {data, stateKeyChild, week});

export const get = (url, stateKeyChild, week) => {
    return objectUI.getUi(
        null,
        {
            url: url,
            selector: calendarSelectors,
            api: calendarApi,
            actionKey: 'calendar.get',
            stateKeyChild: stateKeyChild,
            week: week
        }
    );
};

