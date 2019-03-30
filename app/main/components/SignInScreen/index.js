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
import {
    AsyncStorage,
    Button,
    StatusBar,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Text from '../../../base/components/Text';

import styles from './styles/index.css';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true
        }
    }

    onSignIn = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    showPass = () => {
        const {showPass} = this.state;
        this.setState({showPass: showPass ? false : true});
    };

    render() {
        const {showPass} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                    <View style={styles.containerLogo}>
                        <Image source={require('./styles/images/logo.png')} style={styles.image} />
                        <Text style={styles.text}>REACT NATIVE</Text>
                    </View>
                    <View style={styles.containerForm}>
                        <View style={styles.inputWrapper}>
                            <Image
                                style={styles.inlineImg}
                                source={require('./styles/images/username.png')}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Tên đăng nhập"
                                autoCorrect={false}
                                autoCapitalize={false}
                                returnKeyType='done'
                                placeholderTextColor="white"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Image
                                style={styles.inlineImg}
                                source={require('./styles/images/password.png')}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu"
                                autoCorrect={false}
                                autoCapitalize={false}
                                returnKeyType='done'
                                secureTextEntry={showPass}
                                placeholderTextColor="white"
                                underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.btnEye}
                                onPress={this.showPass}>
                                <Image source={require('./styles/images/eye_black.png')} style={styles.iconEye} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.btnSignIn}
                            onPress={this.onSignIn}
                        >
                            <Text text={"Đăng nhập"} style={{color: "white"}} />
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        );
    }
}

export default SignInScreen;