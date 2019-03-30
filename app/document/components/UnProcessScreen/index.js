import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';

import HeaderNavigation from '../../../main/components/HeaderNavigation';
import DocumentSearch from '../DocumentSearch';
import DocumentListContainer from '../DocumentList/DocumentListContainer';

import styles from './styles/index.css';

const  drawerLabel = 'Văn bản chưa xử lý';
class UnProcessScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        // let drawerIcon = () => (
        //     <Image
        //         source={require('./../../images/home-icon.png')}
        //         style={{ width: 26, height: 26, tintColor: backgroundColor }}
        //     />
        // );
        return {drawerLabel};
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
