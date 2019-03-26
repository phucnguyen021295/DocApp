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
} from 'react-native';

// Components
import {MediumText} from '../../../base/components/Text';

import styles from './styles/index.css';

class HeaderNavigation extends Component {
    onChangeNavigation = () => {
        this.props.navigation.openDrawer()
    };

    onGoBack = () => {
        this.props.navigation.goBack();
        return true;
    };

    renderBtnBack() {
        const {title} = this.props;
        return (
            <TouchableOpacity
                style={{paddingLeft: 30}}
                onPress={this.onGoBack}
            >
                <MediumText text={title} style={{color: '#ffffff'}} />
            </TouchableOpacity>
        )
    }

    renderTitle() {
        const {title} = this.props;
        return (
            <MediumText text={title} style={{color: '#ffffff', paddingLeft: 30}} />
        )
    }

    render() {
        const {isBtnBack} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ paddingHorizontal: 15, paddingVertical: 10, width: 40 }}
                    onPress={this.onChangeNavigation}>
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../../../main/images/menu-button.png')}
                    />
                </TouchableOpacity>
                {
                    isBtnBack ? this.renderBtnBack() : this.renderTitle()
                }
            </View>
        );
    }
}

HeaderNavigation.propTypes = {
    title: PropTypes.string,
    isBtnBack: PropTypes.bool,
};

export default HeaderNavigation;