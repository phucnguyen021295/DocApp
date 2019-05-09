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
    AsyncStorage,
    Button,
    StatusBar,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';
import Text from '../../../base/components/Text';

// Actions
import {objectUI} from '../../../modules/auth/actions';
import {updateStatusApp} from '../../../ui/actions/current';

// Selectors
import {getStatusApp, getUnit} from '../../../ui/selectors/currentSelectors';

import styles from './styles/index.css';

class SignInScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            username: '',
            password: '',
            isInvalid: false,
            isLoadLogin: false,
        };
    }

    componentDidUpdate(prevProps) {
        if(prevProps.statusApp !== this.props.statusApp) {
            if(this.props.statusApp === 'isLoginSuccess') {
                this.goApp();
                this.props.updateStatusApp('');
            }
            if(this.props.statusApp === 'isLoginFalse') {
                this.setState({isInvalid: true, isLoadLogin: false});
                this.props.updateStatusApp('');
            }
        }
    }

    goApp = () => {
        this.props.navigation.navigate('App');
    };


    onSignIn = () => {
        const {username, password} = this.state;
        if(username !== '' && password !== '') {
            this.setState({isLoadLogin: true});
            this.props.onLogin(username, password);
        } else {
            this.setState({isInvalid: true})
        }
    };

    showPass = () => {
        const {showPass} = this.state;
        this.setState({showPass: showPass ? false : true});
    };

    onChangeUserName = (username) => {
        this.setState({username});
    };

    onChangePassWord = (password) => {
        this.setState({password});
    };

    onChangeUnit = () => {
        this.props.navigation.navigate('UnitScreen');
        this.setState({isInvalid: false, isLoadLogin: false});
    };

    render() {
        const {showPass, isInvalid, isLoadLogin} = this.state;
        const {unit} = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                    <View style={styles.containerLogo}>
                        <Image source={require('./styles/images/logoCHXHCNVN.png')} style={styles.image} />
                        <Text
                            text={unit ? unit.get('unit_name') : null}
                            style={styles.text} />
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
                                onChangeText={this.onChangeUserName}
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
                                onChangeText={this.onChangePassWord}
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.btnEye}
                                onPress={this.showPass}>
                                <Image source={require('./styles/images/eye_black.png')} style={styles.iconEye} />
                            </TouchableOpacity>
                        </View>
                        {
                            isInvalid &&
                            <TouchableOpacity
                                // disabled={isLoadLogin}
                                activeOpacity={0.7}
                                // style={styles.btnSignIn}
                                onPress={this.onChangeUnit}
                            >
                                <Text text={"Chọn đơn vị"} style={{color: "white"}} />
                            </TouchableOpacity>
                        }
                        {
                            isInvalid && <Text text={"Sai tài khoản hoặc mật khẩu hoặc sai đơn vị."} style={{paddingBottom: 5, color: 'red' }}/>
                        }
                        <TouchableOpacity
                            disabled={isLoadLogin}
                            activeOpacity={0.7}
                            style={styles.btnSignIn}
                            onPress={this.onSignIn}
                        >
                            {
                                isLoadLogin ?
                                    <ActivityIndicator size="small" color="#ffffff" /> :
                                    <Text text={"Đăng nhập"} style={{color: "white"}} />
                            }
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        );
    }
}

SignInScreen.propTypes = {
    onLogin: PropTypes.func,
    statusApp: PropTypes.string,
    updateStatusApp: PropTypes.func,
    unit: PropTypes.object
};

function mapStateToProps(state) {
    const statusApp = getStatusApp(state);
    return {
        statusApp: statusApp,
        unit: getUnit(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateStatusApp: (statusApp) => dispatch(updateStatusApp(statusApp)),
        onLogin: (username, password) => dispatch(objectUI.loginUi(username, password)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);