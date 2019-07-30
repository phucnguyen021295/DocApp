import React from 'react';
import PropTypes from 'prop-types';
import {
    AsyncStorage,
    StatusBar,
    View,
} from 'react-native';

class CheckAuth extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async() => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

CheckAuth.propTypes = {
    navigation: PropTypes.object,
};

export default CheckAuth;
