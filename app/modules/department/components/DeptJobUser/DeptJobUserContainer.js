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
import DeptJobUser from './DeptJobUser';

// Actions
import {updateChecked, updateCheckBoxByDept} from '../../../../ui/actions/current';

// Selector.
import {getCheckedUser} from '../../../../ui/selectors/currentSelectors';
import {getMeId} from '../../../users/selectors/meSelectors';

function mapStateToProps(state, onwProps) {
    const meId = getMeId(state);
    return {
        meId,
        checkedUser: getCheckedUser(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateChecked: (keyStore, id, name) => dispatch(updateChecked(keyStore, id, name)),
        updateCheckBoxByDept: (meId, userIds) => dispatch(updateCheckBoxByDept(meId, userIds)),
    };
}

const DepartmentContainer = connect(mapStateToProps, mapDispatchToProps)(DeptJobUser);

export default DepartmentContainer;
