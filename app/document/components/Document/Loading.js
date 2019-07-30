/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author hienbv@bkav.com on 09/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { View, Animated } from 'react-native';
import styles from "./styles/index.css";

class NtfcLoading extends React.Component {
    constructor(props) {
        super(props);
        this.loadingAnimation = new Animated.Value(1);
        this.state = {};
    }

    componentDidMount() {
        this.animationFade();
    }

    animationFade = () => {
        Animated.sequence([
            Animated.timing(this.loadingAnimation, {
                toValue: 0.5,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(this.loadingAnimation, {
                toValue: 1,
                duration: 700,
                useNativeDriver: true,
            }),
        ]).start(() => this.animationFade());
    };

    render() {
        return (
            <View style={[styles.btn]}>
                <Animated.View
                    style={{
                        height: 11,
                        backgroundColor: '#dddfe2',
                        opacity: this.loadingAnimation,
                    }}
                />
                <Animated.View
                    style={{
                        height: 11,
                        backgroundColor: '#dddfe2',
                        marginVertical: 10,
                        opacity: this.loadingAnimation,
                    }}
                />
                <Animated.View
                    style={{
                        height: 11,
                        width: 260,
                        backgroundColor: '#dddfe2',
                        opacity: this.loadingAnimation,
                    }}
                />
            </View>
        );
    }
}
export default NtfcLoading;
