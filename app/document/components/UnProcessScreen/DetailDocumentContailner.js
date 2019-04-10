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

import {connect} from 'react-redux';

// Components
import Document from './Document';

// Actions
import {get} from '../../actions/document';

// Selectors
import {getDocument} from '../../selectors/documentSelectors';

function mapStateToProps(state, ownProps) {
    const {documentId} = ownProps;
    return {
        document: getDocument(state, documentId),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDocument: (documentId, url) => dispatch(get(documentId, url)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);