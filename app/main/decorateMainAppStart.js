/* eslint-disable react/no-multi-comp,react/prefer-stateless-function,no-trailing-spaces,no-shadow */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    BackHandler,
    NativeModules,
    Dimensions,
    NetInfo,
    Keyboard,
    AsyncStorage,
    AppState,
    StatusBar,
} from 'react-native';
import hoistNonReactStatic from 'hoist-non-react-statics';
import PushNotification from 'react-native-push-notification';

// Action
import {
    setWindowApp,
    setNetInfo,
    updateHeightKeyBoard,
    setStatusInternet,
} from 'snw-base-globalUi/lib/actions/currentUiAction';

// Selector
import * as curentSelectors from 'snw-base-globalUi/lib/selectors/current';

/**
 * Thực hiện toàn bộ các kịch bản cần thực thi ngay khi app start lên
 * @param AppStack
 * @returns {*}
 */
function decorateMainAppStart(AppStack) {
    class MainApp extends React.Component {
        static router = AppStack.router;

        constructor(props) {
            super(props);
            this.state = {
                appState: AppState.currentState,
            };
            this.handleAppStateChange = this.handleAppStateChange.bind(this);
            this.handleKeyboardDidShow = this.handleKeyboardDidShow.bind(this);
            this.handleConnectionChange = this.handleConnectionChange.bind(this);
            this.handleDimensionsChange = this.handleDimensionsChange.bind(this);
            this.handleBackPress = this.handleBackPress.bind(this);
            this.recheckAuthToken();
        }

        componentDidMount() {
            StatusBar.setBackgroundColor('white');
            StatusBar.setBarStyle('dark-content');

            // Demention event
            Dimensions.addEventListener('change', this.handleDimensionsChange);

            // Back Handle
            this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

            // Network
            // Cap nhat trang thai network hien tai
            NetInfo.isConnected.fetch().done(this.handleConnectionChange);
            // Lang nghe thay doi trong tuong lai
            this.netInfoListener = NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

            // KeyBoard
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);

            // AppState
            AppState.addEventListener('change', this.handleAppStateChange);
        }

        componentWillUnmount() {
            // Back Handle
            this.backHandler.remove();

            // Window
            Dimensions.removeEventListener('change', this.handleDimensionsChange);

            // Network
            this.netInfoListener.remove();

            // KeyBoard
            this.keyboardDidShowListener.remove();

            // AppState
            AppState.removeEventListener('change', this.handleAppStateChange);
        }

        onRegister = async(deviceToken) => {
            console.log('deviceToken is ', deviceToken);
            AsyncStorage.setItem('deviceToken', deviceToken.token);
        };

        configure = () => {
            PushNotification.configure({
                // (optional) Called when Token is generated (iOS and Android)
                onRegister: this.onRegister, // this._onRegister.bind(this),

                // (required) Called when a remote or local notification is opened or received
                // onNotification: onNotification, // this._onNotification,

                // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
                senderID: '1089505526724',

                // IOS ONLY (optional): default: all - Permissions to register.
                permissions: {
                    alert: true,
                    badge: true,
                    sound: true,
                },

                // Should the initial notification be popped automatically
                // default: true
                popInitialNotification: false,

                /**
                 * (optional) default: true
                 * - Specified if permissions (ios) and token (android and ios) will requested or not,
                 * - if not, you must call PushNotificationsHandler.requestPermissions() later
                 */
                requestPermissions: true,
            });
        };

        recheckAuthToken = async() => {
            const userToken = await AsyncStorage.getItem('token');
            if (!userToken) {
                this.props.navigation.navigate('Auth');
            } else {
                // this.props.doLoginSuccess();
                // this.configure();
            }
        };

        handleBackPress() {
            NativeModules.MainSetLibModule.startTrackingAudioJackPlug();
            return true;
        }

        handleDimensionsChange(e) {
            const {height, width} = e.window;
            this.props.onDimensionsChange(height, width);
        }

        handleConnectionChange(isConnected) {
            this.props.onConnectionChange(isConnected);
        }

        handleAppStateChange = async(appState) => {
            // TODO by CuongNT: Chuyen cac kich ban nay xuong saga. Tai day chi thuc hien dispatch ra cac action lien quan toi appstate thay doi.
            // The app is running in the background
            const userToken = await AsyncStorage.getItem('token');
            if(userToken) {
                if (appState === 'background') {
                    // TODO by CuongNT: Thoat App => gui Intent bao service nhan push.
                    this.props.saveStorage();
                    NativeModules.RNSnwMbMqtt.scheduleToStop();
                } else if(appState === 'active') {
                    // TODO by CuongNT: Vao App => gui Intent bao service unpush.
                    NativeModules.RNSnwMbMqtt.start();
                }
            }
            this.setState({appState: appState});
        };

        render() {
            return (
                <AppStack navigation={this.props.navigation} />
            );
        }
    }

    MainApp.propTypes = {
        onDimensionsChange: PropTypes.func,
        onConnectionChange: PropTypes.func,
        onKeyboardDidShow: PropTypes.func,
        keyboardHeight: PropTypes.number,
        saveStorage: PropTypes.func,
        doLoginSuccess: PropTypes.func,
        navigation: PropTypes.object,
        updateMqttStatus: PropTypes.func,
    };

    function mapDispatchToProps(dispatch) {
        return {
            onDimensionsChange: (height, width) => dispatch(setWindowApp(height, width)),
            onConnectionChange: (status) => dispatch(setNetInfo(status)),
            onKeyboardDidShow: (heightBoard) => dispatch(updateHeightKeyBoard(heightBoard)),
            saveStorage: () => dispatch({type: 'SAVE_MESSAGE_STORAGE'}),
        };
    }

    const MainAppContainer = connect(mapStateToProps, mapDispatchToProps)(MainApp);

    -hoistNonReactStatic(MainAppContainer, MainApp);

    return MainAppContainer;
}

export default decorateMainAppStart;
