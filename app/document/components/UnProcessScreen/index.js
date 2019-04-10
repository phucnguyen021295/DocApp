import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import DocumentSearch from '../DocumentSearch';
import DocumentListContainer from './DocumentListContainer';

import styles from './styles/index.css';

const  drawerLabel = 'Văn bản chưa xử lý';
class UnProcessScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerIcon = () => (
            <Ionicons
                name={"ios-arrow-forward"}
                size={20}
                color={"#bbbbbb"}
            />
        );
        return {drawerLabel, drawerIcon};
    };

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} />
                <View style={{flex: 1, backgroundColor: 'white',}}>
                    <DocumentSearch />
                    <DocumentListContainer />
                </View>
            </SafeAreaView>
        );
    }
}

export default UnProcessScreen;
