/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 31/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {createActionNoAppID} from '../../../base/actions';
import {objectUI} from '../../../base/apis/actionApi';
import userApi from '../apis/userApi';
import userSelectors from '../selectors/userSelectors';

export const USER = {
    ADD: 'ADD_USER'
};

export const add = (data) => createActionNoAppID(USER.ADD, {data});

export const get = (userId, url) => {
    return objectUI.getUi(
        null,
        {
            userId,
            url: url,
            selector: userSelectors,
            api: userApi,
            actionKey: 'user.get',
            // stateKeyChild: stateKeyChild
        }
    );
};
