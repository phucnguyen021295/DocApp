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
import PropTypes from 'prop-types';
import {
    View,
    SafeAreaView,
    Platform
} from 'react-native';
import Pdf from 'react-native-pdf';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
// import DocumentSearch from '../DocumentSearch';
import SubmissionListContainer from '../SubmissionList/SubmissionListContainer';

import styles from './styles/index.css';

const  drawerLabel = 'Phiếu trình';
class DetailPhieuTrinhScreen extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };

    render() {
        const {navigation} = this.props;
        debugger;
        const uri = navigation.getParam('uri');
        const source = {uri: uri,cache:true};
        return (
            <SafeAreaView style={styles.container}>
                {/*<HeaderNavigation {...this.props} title={drawerLabel} isBtnBack={true} />*/}
                <View style={{flex: 1, backgroundColor: 'white',}}>
                    {/*<DocumentSearch />*/}
                    <View style={styles.containerFile}>
                        <Pdf
                            source={source}
                            onLoadComplete={(numberOfPages,filePath)=>{
                                console.log(`number of pages: ${numberOfPages}`);
                            }}
                            onPageChanged={(page,numberOfPages)=>{
                                console.log(`current page: ${page}`);
                            }}
                            onError={(error)=>{
                                console.log(error);
                            }}
                            style={styles.pdf}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

DetailPhieuTrinhScreen.propTypes = {
    navigation: PropTypes.object,
};

export default DetailPhieuTrinhScreen;