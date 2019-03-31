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

import DrawerContent from './components/DrawerContent';

// SignIn
import AuthLoadingScreen from './components/AuthLoadingScreen';
import SignInScreen from './components/SignInScreen';

// Main
import UnProcessScreen from '../document/components/UnProcessScreen';
import DetailUnProcessScreen from '../document/components/DetailUnProcessScreen';
import AboutExpireScreen from '../document/components/AboutExpireScreen';
import ReceiveScreen from '../document/components/ReceiveScreen';
import ProcessScreen from '../document/components/ProcessScreen';
import InternalScreen from '../document/components/InternalScreen';
import NoteScreen from '../document/components/NoteScreen';
import MeetingScreen from '../calendar/components/MeetingScreen';
import WorkingScheduleScreen from '../calendar/components/WorkingScheduleScreen';

const {height, width} = Dimensions.get('window');

const AuthStack = createStackNavigator({
    SignIn: SignInScreen
}, {
    headerMode: 'none'
});

const routeConfigs = {
    UnProcessScreen: UnProcessScreen,
    DetailUnProcessScreen: DetailUnProcessScreen,
    AboutExpireScreen: AboutExpireScreen,
    ReceiveScreen: ReceiveScreen,
    ProcessScreen: ProcessScreen,
    InternalScreen: InternalScreen,
    NoteScreen: NoteScreen,
    MeetingScreen: MeetingScreen,
    WorkingScheduleScreen: WorkingScheduleScreen

};
const drawerNavigatorConfig = {
    initialRouteName: 'UnProcessScreen',
    drawerWidth: width / 1.2,
    drawerPosition: 'left',
    useNativeAnimations: true,
    drawerType: 'back',
    contentOptions: {
        activeTintColor: '#e91e63',
        itemsContainerStyle: {
            marginVertical: 0,
        },
        iconContainerStyle: {
            opacity: 1
        },
        labelStyle: {
            color: 'gray',
            // marginLeft: 0
        },
        itemStyle: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between'
        }
    },
    drawerIcon: {
        tintColor: 'red',
    },
    contentComponent: (props) => <DrawerContent {...props} />
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