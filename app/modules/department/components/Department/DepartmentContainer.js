/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 12/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {connect} from 'react-redux';

// components
import Department from './Department';

// Actions
import {updateChecked} from '../../../../ui/actions/current';

// Selector.
import * as departmentUserSelectors from '../../selectors/departmentUserSelectors';
import {getCheckedDept} from '../../../../ui/selectors/currentSelectors';

function mapStateToProps(state, onwProps) {
    const {departmentId} = onwProps;
    const department = departmentUserSelectors.get(state, departmentId);
    return {
        departmentId,
        department: department,
        checkedDept: getCheckedDept(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateChecked: (keyStore, id) => dispatch(updateChecked(keyStore, id))
    };
}

const DepartmentContainer = connect(mapStateToProps, mapDispatchToProps)(Department);

export default DepartmentContainer;
