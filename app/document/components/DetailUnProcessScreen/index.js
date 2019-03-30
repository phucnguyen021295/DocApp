import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import DocumentEvent from '../DocumentEvent';
import HeaderNavigation from '../../../main/components/HeaderNavigation';
import Text from '../../../base/components/Text';

import styles from './styles/index.css';

const  drawerLabel = 'Văn bản chưa xử lý';
class UnProcessScreen extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    };

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <HeaderNavigation {...this.props} title={drawerLabel} isBtnBack={true} />
                <View style={styles.content}>
                    <DocumentEvent />
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default UnProcessScreen;
