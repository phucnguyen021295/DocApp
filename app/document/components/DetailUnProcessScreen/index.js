import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';

import HeaderNavigation from '../HeaderNavigation';
import Text from '../../../base/components/Text';
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
                <HeaderNavigation {...this.props} title={drawerLabel} isBtnBack={true} />
                <Text text={"Chi tiet"} style={{color: 'gray'}} />
            </SafeAreaView>
        );
    }
}

export default UnProcessScreen;
