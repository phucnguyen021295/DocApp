/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import DCMHandlingUser from './DCMHandlingUser';

// Actions
// import {getList} from '../../actions/document';

// Selectors
import {getItems} from '../../selectors/handlingDCMSelectors';

// import decorateGetList from '../../../base/utils/decorateGetList';
// import {storeConfig} from '../../../storeConfig';

function mapStateToProps(state, ownProps) {
    const {handlingUserDCMId} = ownProps;
    return {
        handlingUserDCM: getItems(state, handlingUserDCMId),
    };
}

const enhance = compose(
    connect(mapStateToProps),
    // decorateGetList
);

const DCMHandlingUserContainer = enhance(DCMHandlingUser);

export default DCMHandlingUserContainer;