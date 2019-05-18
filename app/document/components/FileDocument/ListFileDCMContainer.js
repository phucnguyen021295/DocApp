/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 11/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import DocumentList from './DocumentList';

// Actions
import {getList} from '../../actions/fileDocument';

// Selectors
import {getItemIds} from '../../selectors/hasDocumentSelectors';

import decorateGetList from '../../../base/utils/decorateGetList';
import {storeConfig} from '../../../storeConfig';

function mapStateToProps(state) {
    return {
        documentIds: getItemIds(state, storeConfig.Document + 'denhan'),

        getListAction: getList,
        url: 'http://mobile_qlvb.bacninh.gov.vn/document/list.json?status=0&page=1',
        stateKey: storeConfig.Document,
        stateKeyChild: storeConfig.Document + 'denhan'
    };
}

const enhance = compose(
    connect(mapStateToProps),
    decorateGetList
);

const DocumentListContainer = enhance(DocumentList);

export default DocumentListContainer;
