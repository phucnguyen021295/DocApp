/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 26/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    VirtualizedList,
} from 'react-native';
import DocumentFileContainer from './DocumentFileContainer';

class DocumentFileList extends Component {
    constructor(props) {
        super(props);
    }

    keyExtractor = (documentId) => documentId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <DocumentFileContainer fileId={data.item} />;

    render() {
        const {fileIds} = this.props;
        return (
            <VirtualizedList
                data={fileIds.toList()}
                contentContainerStyle={{paddingHorizontal: 15}}
                style={{flex: 1}}
                getItemCount={this.getItemCount}
                getItem={this.getItem}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

DocumentFileList.propTypes = {
    fileIds: PropTypes.array,
};

DocumentFileList.defaultProps = {
    fileIds: OrderedSet(),
};


export default DocumentFileList;
