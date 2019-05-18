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

import React, { Component } from 'react';
import styles from "../WorkingScheduleScreen/styles/index.css";
import {Rows} from "react-native-table-component";

class CalendarItem extends Component {
    render() {
        return (
            <Rows data={this.props.tableData} widthArr={[150, 200, 100, 100]} style={styles.row} textStyle={styles.text}/>
        );
    }
}

export default CalendarItem;
