/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 10/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {storeConfig} from '../../storeConfig';

const statePath = [storeConfig.Calendar];

export const get = (state, id) => state.getIn([...statePath, id]);

export const getCalendarByDate = (state, date) => state.getIn([...statePath, date]);

export const getListCalendarBydate = (state, date) => {
    const listCalendar = state.getIn([...statePath]).filter(item => item.get('startdate') === date);
    let list = [];
    listCalendar && listCalendar.map(item => {
        const arr = [item.get('fullname'), item.get('summary'), item.get('place'), item.get('starttime')];
        list.push(arr);
    });
    return list.length > 0 ? list : [['', '', '', '']];
};
