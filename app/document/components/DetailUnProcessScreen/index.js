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
import MediumText from "../../../base/components/Text/RobotoMediumText/index";

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
                        <View style={{paddingHorizontal: 15}}>
                            <Text text={'Chơơng trình công tác tháng 4/2019'} style={{color: '#000000', paddingVertical: 5}}/>
                            <View style={{flexDirection: 'row', paddingVertical: 5}}>
                                <MediumText text={'Số hiệu: '} style={{color: '#000000'}}/>
                                <Text text={'05-Ctr/ĐUK'} style={{color: '#000000'}}/>
                            </View>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <MediumText text={"Thông tin cơ bản(Xem chi tiết)"} style={styles.title}/>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <MediumText text={"Thông tin xử lý:"} style={styles.title}/>
                            <View style={{paddingHorizontal: 15}}>

                            </View>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <MediumText text={"Tệp tin đính kèm:"} style={styles.title}/>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default UnProcessScreen;
