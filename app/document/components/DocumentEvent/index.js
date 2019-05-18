/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 28/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Text from '../../../base/components/Text';

// Actions
import * as departmentUserAction from '../../../modules/department/actions/departmentUser';
import {finishText} from '../../actions/document';

// Selector
import {getUnitCode} from '../../../modules/auth/selectors/authSelectors';
import {getStatusDoc} from '../../selectors/assignTohisSelectors';
import {getMeId} from '../../../modules/users/selectors/meSelectors';

// config
import {DOMAIN} from '../../../config';

// Styles
import styles from './styles/index.css';

class DocumentEvent extends Component {
    constructor(props) {
        super(props);
    }

    onSuccess = () => {
        const {documentId} = this.props;
        const url = `${DOMAIN}/document/setdone.json?id=${documentId}&status=1`;
        this.props.updateStatus(url, documentId);
    };

    onChangeDoc = () => {
        const {unit_id, documentId} = this.props;
        const url = `${DOMAIN}/user/listByTitles.json?titles_id=26,27,52,28,23,60,59,62,58,61,63,36,44,30,42,41,25,24,33,38,53,54,55,56,57,29&unit_id=${unit_id}`;
        this.props.getUserForDepart(url);
        this.props.navigation.navigate('MoveDCMScreen', {documentId});
        // alert("Chuc nang dang phat trien");
    };

    onRevoke = () => {
        alert("Chuc nang dang phat trien");
    };

    render() {
        const {isBtnBack, statusBtnHT} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.onChangeDoc}
                >
                    <Text text={"Chuyển văn bản"} style={{color: 'gray'}} />
                </TouchableOpacity>
                <View style={styles.space} />
                {
                    statusBtnHT ? (
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.onSuccess}
                        >
                            <Text text={"Hoàn thành"} style={{color: 'gray'}} />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
        );
    }
}

DocumentEvent.propTypes = {
    title: PropTypes.String,
    isBtnBack: PropTypes.bool,
    getUserForDepart: PropTypes.func,
    navigation: PropTypes.object,
    unit_id: PropTypes.String,
    statusBtnHT: PropTypes.bool,
    updateStatus: PropTypes.func,
    documentId: PropTypes.String,
};

function mapStateToProps(state, ownProps) {
    const {documentId} = ownProps;
    return {
        unit_id: getUnitCode(state),
        statusBtnHT: getStatusDoc(state, documentId),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateStatus: (url, documentId) => dispatch(finishText(url, documentId)),
        getUserForDepart: (url) => dispatch(departmentUserAction.get(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentEvent);
