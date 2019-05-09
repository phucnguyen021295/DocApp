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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    BackHandler
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import {MediumText} from '../../../base/components/Text/index';

// Styles
import styles from './styles/index.css';

class HeaderNavigation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onGoBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onGoBack);
    }

    onChangeNavigation = () => {
        this.props.navigation.toggleDrawer()
    };

    onGoBack = () => {
        this.props.navigation.goBack();
        return true;
    };

    render() {
        const {isBtnBack, title} = this.props;
        return (
            <View style={styles.container}>
                {
                    isBtnBack ?
                        (
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={this.onGoBack}
                            >
                                <Ionicons
                                    name={Platform.OS === 'ios' ? "ios-arrow-back" : "md-arrow-back"}
                                    size={25}
                                    color={"#ffffff"}
                                />
                            </TouchableOpacity>
                        ) :
                        (
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={this.onChangeNavigation}
                            >
                                <Ionicons
                                    name={Platform.OS === 'ios' ? "ios-menu" : "md-menu"}
                                    size={25}
                                    color={"#ffffff"}
                                />
                            </TouchableOpacity>
                        )
                }
                <MediumText text={title} style={styles.title} />
            </View>
        );
    }
}

HeaderNavigation.propTypes = {
    title: PropTypes.string,
    isBtnBack: PropTypes.bool,
};

export default HeaderNavigation;
