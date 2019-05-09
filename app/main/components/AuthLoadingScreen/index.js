/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 21/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';

// Actons
import {updateUnit} from '../../../ui/actions/current';

// Shares
import {convertToObject} from '../../../shares/convertData';

import styles from './styles/index.css';

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        // AsyncStorage.removeItem('unit');
        const unit = await AsyncStorage.getItem('unit');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        // this.props.navigation.navigate('SignInScreen');
        this.props.navigation.navigate(unit ? 'SignInScreen' : 'UnitScreen');

        if(unit) {
            const obj = convertToObject(unit);
            this.props.updateUnit(obj);
            StatusBar.setBackgroundColor('#123668')
        } else {
            // StatusBar.setBackgroundColor('#ffffff')
        }
    };

    // Render any loading content that you like here
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </SafeAreaView>
        );
    }
}

AuthLoadingScreen.propTypes = {
    updateUnit: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
    return {
        updateUnit: (unit) => dispatch(updateUnit(unit)),
    };
}

export default connect(null, mapDispatchToProps)(AuthLoadingScreen);
