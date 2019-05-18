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

import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import DepartmentListContainer from '../../../modules/department/components/DepartmentList/DepartmentListContainer';

import styles from './styles/index.css';
import PropTypes from "prop-types";

const  drawerLabel = 'Chuyển văn bản';
class MoveDCMScreen extends Component {
    render() {
        const {navigation} = this.props;
        const documentId = navigation.getParam('documentId');
        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} isBtnBack={true} />
                <View style={{ flex: 1, backgroundColor: 'white'}}>
                    <DepartmentListContainer documentId={documentId} />
                </View>
            </SafeAreaView>
        );
    }
}

MoveDCMScreen.propTypes = {
    navigation: PropTypes.object,
};

export default MoveDCMScreen;
