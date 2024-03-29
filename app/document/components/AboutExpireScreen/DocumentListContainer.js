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
import {updatePageDocument} from "../../../ui/actions/current";

// Selectors
import {getItemIds, getItems} from '../../selectors/hasDocumentSelectors';
import {getPageByDocument} from '../../../ui/selectors/currentSelectors';

import decorateGetList from '../../../base/utils/decorateGetList';
import {storeConfig} from '../../../storeConfig';
import {DOMAIN} from '../../../config';

const stateKeyChild = storeConfig.DocumentAboutExprire;

function mapStateToProps(state) {
    const page = getPageByDocument(state, stateKeyChild);
    const url = `${DOMAIN}/document/expireddoc.json?page=${page}&status=0&kind_id=&content=&notes=0`;
    return {
        documentIds: getItemIds(state, stateKeyChild, page),
        pageItems: getItems(state, stateKeyChild, page),
        page,

        getListAction: getList,
        url: url,
        stateKeyChild: stateKeyChild
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updatePageDocument: (page) => dispatch(updatePageDocument(stateKeyChild, page)),
    }
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    decorateGetList
);

const DocumentListContainer = enhance(DocumentList);

export default DocumentListContainer;
