/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 04/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import DocumentList from '../DocumentList/DocumentList';

// Actions
import {getList} from '../../actions/document';

// Selectors
import {getItemIds} from '../../selectors/hasDocumentSelectors';

import decorateGetList from '../../../base/utils/decorateGetList';
import {storeConfig} from '../../../storeConfig';
import {getPageByDocument} from "../../../ui/selectors/currentSelectors";

const stateKeyChild = storeConfig.DocumentInternal;
const url = 'http://mobile_qlvb.bacninh.gov.vn/document/internal.json?page=1&content=';

function mapStateToProps(state) {
    const page = getPageByDocument(state, stateKeyChild);
    return {
        documentIds: getItemIds(state, stateKeyChild, page),

        getListAction: getList,
        url: url,
        stateKeyChild: stateKeyChild
    };
}

const enhance = compose(
    connect(mapStateToProps),
    decorateGetList
);

const DocumentListContainer = enhance(DocumentList);

export default DocumentListContainer;
