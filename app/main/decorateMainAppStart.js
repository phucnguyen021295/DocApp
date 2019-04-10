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

        componentDidMount() {
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
        }

        recheckAuthToken = async() => {
            const userToken = await AsyncStorage.getItem('token');
            if (!userToken) {
                this.props.navigation.navigate('Auth');
            } else {
                this.props.doLoginSuccess();
                // this.configure();
            }
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
            doLoginSuccess: () => dispatch({type: "LOGIN_SUCCESS"})
        };
    }

    const MainAppContainer = connect(null, mapDispatchToProps)(MainApp);

    -hoistNonReactStatic(MainAppContainer, MainApp);

    return MainAppContainer;
}

export default decorateMainAppStart;
