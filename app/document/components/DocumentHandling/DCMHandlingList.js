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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    View,
    VirtualizedList
} from 'react-native';
import DCMHandlingContainer from './DCMHandlingContainer';

class DCMHandlingList extends Component {
    constructor(props) {
        super(props);
    }

    keyExtractor = (handlingDCMId) => handlingDCMId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <DCMHandlingContainer documentId={this.props.documentId} handlingDCMId={data.item}  />;

    render() {
        const {handlingDCMIds} = this.props;
        return (
            <VirtualizedList
                data={handlingDCMIds.toList()}
                getItemCount={this.getItemCount}
                getItem={this.getItem}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                scrollEnabled={false}
            />
        );
    }
}

DCMHandlingList.propTypes = {
    handlingDCMIds: PropTypes.array,
    documentId: PropTypes.string
};

DCMHandlingList.defaultProps = {
    handlingDCMIds: OrderedSet(),
};


export default DCMHandlingList;