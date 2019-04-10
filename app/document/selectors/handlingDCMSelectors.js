/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 08/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {storeConfig} from '../../storeConfig';

export const statePath = [storeConfig.HandlingDCM];

export const getHandlingDCM = (state, documentId, handlingDCMId) => {
    const handlingDCMItem = state.getIn([storeConfig.HasHandlingDCM, documentId, handlingDCMId, 'itemIds']).first();
    return state.getIn([...statePath, handlingDCMItem]);
};

export const getItems = (state, handlingDCMId) => state.getIn([...statePath, handlingDCMId]);
