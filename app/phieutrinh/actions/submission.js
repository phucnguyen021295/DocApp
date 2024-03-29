/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 05/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {createActionNoAppID} from '../../base/actions';
import {objectUI} from '../../base/apis/actionApi';
import submissionApi from '../apis/submissionApi';
import submissionSelectors from '../selectors/submissionSelectors';

export const SUBMISSION = {
    ADD: 'ADD_SUBMISSION'
};

export const add = (data, stateKeyChild) => createActionNoAppID(SUBMISSION.ADD, {data, stateKeyChild});

export const getList = (url, stateKeyChild) => {
    return objectUI.getListUi(
        null,
        {
            url: url,
            selector: submissionSelectors,
            api: submissionApi,
            actionKey: 'subUi.getList',
            stateKeyChild: stateKeyChild
        }
    );
};

export const get = (documentId, url) => {
    return objectUI.getUi(
        null,
        {
            documentId,
            url: url,
            selector: documentSelectors,
            api: documentApi,
            actionKey: 'docUi.get',
            // stateKeyChild: stateKeyChild
        }
    );
};