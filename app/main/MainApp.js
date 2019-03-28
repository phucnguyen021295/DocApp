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
import { AppRegistry, Dimensions } from 'react-native';
import {
    createDrawerNavigator,
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    DrawerItems,
} from 'react-navigation';

// SignIn
import AuthLoadingScreen from './components/AuthLoadingScreen';
import SignInScreen from './components/SignInScreen';

// Main
import UnProcessScreen from '../document/components/UnProcessScreen';
import DetailUnProcessScreen from '../document/components/DetailUnProcessScreen';
import WithdrawalComponent from './draw/WithdrawalComponent';
import PaymentCodeComponent from './draw/PaymentCodeComponent';
import ScanCodeComponent from './draw/ScanCodeComponent';
import AboutExpireScreen from '../document/components/AboutExpireScreen';

const {height, width} = Dimensions.get('window');

const AuthStack = createStackNavigator({
    SignIn: SignInScreen
});

const routeConfigs = {
    UnProcessScreen: {
        screen: UnProcessScreen,
    },
    DetailUnProcessScreen: {
        screen: DetailUnProcessScreen
    },
    AboutExpireScreen: {
        screen: AboutExpireScreen
    },
    ScanCode: {
        screen: ScanCodeComponent,
    },
    Withdrawal: {
        screen: WithdrawalComponent,
    },
    PaymentCode: {
        screen: PaymentCodeComponent,
    },
};
const drawerNavigatorConfig = {
    initialRouteName: 'UnProcessScreen',
    drawerWidth: width / 1.2,
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: 'red',
    },
    drawerIcon: {
        tintColor: 'red',
    },
    contentComponent: (props) => <DrawerItems {...props} />
    // order: ["UnProcessScreen", "ScanCode", "Withdrawal", "PaymentCode"],
};
export const AppStack = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);

const AppMain = createAppContainer(createSwitchNavigator(
    {
        AuthLoadingScreen: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoadingScreen',
    }
));



export default AppMain;