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

import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import DCMHandlingList from './DCMHandlingList';

// Actions
// import {getList} from '../../actions/document';

// Selectors
import {getActionTypeIds} from '../../selectors/hasHandlingDCMSelectors';

// import decorateGetList from '../../../base/utils/decorateGetList';
// import {storeConfig} from '../../../storeConfig';

function mapStateToProps(state, ownProps) {
    const {documentId} = ownProps;
    return {
        handlingDCMIds: getActionTypeIds(state, documentId),
    };
}

const enhance = compose(
    connect(mapStateToProps),
    // decorateGetList
);

const DCMHandlingListContainer = enhance(DCMHandlingList);

export default DCMHandlingListContainer;