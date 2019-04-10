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

import {createActionNoAppID} from '../../base/actions';
import {objectUI} from '../../base/apis/actionApi';
import documentApi from '../apis/documentApi';
import * as handlingDCMSelectors from '../selectors/handlingDCMSelectors';

export const HANDLING_DOCUMENT = {
    ADD: 'ADD_HANDLING_DOCUMENT'
};

export const add = (data, documentId) => createActionNoAppID(HANDLING_DOCUMENT.ADD, {data, documentId});

export const get = (documentId, url) => {
    return objectUI.getUi(
        null,
        {
            documentId,
            url: url,
            selector: handlingDCMSelectors,
            api: documentApi,
            actionKey: 'handlingDCMUi.get',
            // stateKeyChild: stateKeyChild
        }
    );
};