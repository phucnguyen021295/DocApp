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
import fileDocumentApi from '../apis/fileDocumentApi';
import fileDocumentSelectors from '../selectors/fileDocumentSelectors';

export const FILE_DOCUMENT = {
    ADD: 'ADD_FILE_DOCUMENT'
};

export const add = (data, documentId) => createActionNoAppID(FILE_DOCUMENT.ADD, {data, documentId});

export const get = (documentId, url) => {
    return objectUI.getUi(
        null,
        {
            documentId,
            url: url,
            selector: fileDocumentSelectors,
            api: fileDocumentApi,
            actionKey: 'fileDocUi.get',
            // stateKeyChild: stateKeyChild
        }
    );
};
