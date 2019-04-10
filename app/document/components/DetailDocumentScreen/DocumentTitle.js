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
import {connect} from 'react-redux';
import {
    View,
    TouchableOpacity,
} from 'react-native';

// Components
import Text, {MediumText} from '../../../base/components/Text';

// Selectors
import {getDocument} from '../../selectors/documentSelectors';

class DocumentTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {document} = this.props;
        return (
            <View style={{paddingHorizontal: 15}}>
                <Text text={document.get('office_name')} style={{color: '#000000', paddingVertical: 5}}/>
                <View style={{flexDirection: 'row', paddingVertical: 5}}>
                    <MediumText text={'Số hiệu: '} style={{color: '#000000'}}/>
                    <Text text={document.get('doc_code')} style={{color: '#000000'}}/>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {documentId} = ownProps;
    return {
        document: getDocument(state, documentId),
    };
}

DocumentTitle.propTypes = {
    document: PropTypes.object,
};


export default connect(mapStateToProps)(DocumentTitle);