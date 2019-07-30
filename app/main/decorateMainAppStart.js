/* eslint-disable react/no-multi-comp,react/prefer-stateless-function,no-trailing-spaces,no-shadow */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    BackHandler,
    NetInfo,
    AsyncStorage,
    AppState,
    StatusBar,
} from 'react-native';
import hoistNonReactStatic from 'hoist-non-react-statics';
import firebase from "react-native-firebase";


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
            this.handleConnectionChange = this.handleConnectionChange.bind(this);
            this.handleBackPress = this.handleBackPress.bind(this);
            this.recheckAuthToken();
        }

        async componentDidMount() {
            StatusBar.setBackgroundColor('#123668');
            // Back Handle
            this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

            // Network
            // Cap nhat trang thai network hien tai
            NetInfo.isConnected.fetch().done(this.handleConnectionChange);
            // Lang nghe thay doi trong tuong lai
            this.netInfoListener = NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);

            // AppState
            AppState.addEventListener('change', this.handleAppStateChange);

            this.checkPermission();
            this.createNotificationListeners(); //add this line
        }

        componentWillUnmount() {
            // Back Handle
            this.backHandler.remove();

            // Network
            this.netInfoListener.remove();

            // KeyBoard
            // this.keyboardDidShowListener.remove();

            // AppState
            AppState.removeEventListener('change', this.handleAppStateChange);

            this.notificationListener();
            this.notificationOpenedListener();
        }

        //1
        async checkPermission() {
            const enabled = await firebase.messaging().hasPermission();
            if (enabled) {
                this.getToken();
            } else {
                this.requestPermission();
            }
        }

        //2
        async requestPermission() {
            try {
                await firebase.messaging().requestPermission();
                // User has authorised
                this.getToken();
            } catch (error) {
                // User has rejected permissions
                console.log('permission rejected');
            }
        }

        //3
        async getToken() {
            let fcmToken = await AsyncStorage.getItem('fcmToken');
            if (!fcmToken) {
                fcmToken = await firebase.messaging().getToken();
                if (fcmToken) {
                    // user has a device token
                    await AsyncStorage.setItem('fcmToken', fcmToken);
                }
            }
        }

        // 4
        async createNotificationListeners() {
            /*
            * Triggered when a particular notification has been received in foreground
            * */
            this.notificationListener = firebase.notifications().onNotification((notification) => {
                const { title, body, data } = notification;
                debugger;
                const notification1 = new firebase.notifications.Notification()
                    .setNotificationId(data.docId)
                    .setTitle(title)
                    .setBody(body)
                    .setData(data)
                firebase.notifications().displayNotification(notification1)
                // this.showAlert(title, body);
            });

            /*
            * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
            * */
            this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
                const { title, body, data } = notificationOpen.notification;
                debugger;
                const notificationId = data.docId;
                const drawerLabel = "Chi tiet van ban";
                this.navigateDetailDoc(notificationId, drawerLabel);
            });

            /*
            * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
            * */
            const notificationOpen = await firebase.notifications().getInitialNotification();
            if (notificationOpen) {
                const { title, body, data } = notificationOpen.notification;
                const notificationId = data.docId;
                const drawerLabel = "Chi tiet van ban";
                this.navigateDetailDoc(notificationId, drawerLabel);
            }
            /*
            * Triggered for data only payload in foreground
            * */
            // this.messageListener = firebase.messaging().onMessage((message) => {
            //     //process data message
            //     debugger;
            //     console.log(JSON.stringify(message));
            // });
        }

        navigateDetailDoc = (documentId, drawerLabel) => {
            this.props.getDocumentDetail(documentId);
            this.props.navigation.navigate("DetailUnProcessScreen", {documentId, drawerLabel});
        };

        recheckAuthToken = () => {
            this.props.doLoginSuccess();
        };

        handleBackPress = () => {

        };

        handleConnectionChange(isConnected) {
            // this.props.onConnectionChange(isConnected);
        }

        handleAppStateChange = async(appState) => {
            // The app is running in the background
            const userToken = await AsyncStorage.getItem('token');
            this.setState({appState: appState});
        };

        render() {
            return (
                <AppStack navigation={this.props.navigation} />
            );
        }
    }

    MainApp.propTypes = {
        doLoginSuccess: PropTypes.func,
        navigation: PropTypes.object,
    };

    function mapDispatchToProps(dispatch) {
        return {
            doLoginSuccess: () => dispatch({type: "LOGIN_SUCCESS"}),
            getDocumentDetail: (documentId) => dispatch({type: 'GET_DOCUMENT_DETAIL', payload: {documentId}}),
        };
    }

    const MainAppContainer = connect(null, mapDispatchToProps)(MainApp);

    -hoistNonReactStatic(MainAppContainer, MainApp);

    return MainAppContainer;
}

export default decorateMainAppStart;
