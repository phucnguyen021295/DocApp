/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 17/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {connect} from "react-redux";

import CalendarItem from './CalendarItem';

import {getListCalendarBydate} from '../../selectors/calendarSelectors';

function mapStateToProps(state, ownProps) {
    const {date} = ownProps;
    return {
        tableData: getListCalendarBydate(state, date),
    };
}
export default connect(mapStateToProps)(CalendarItem);
