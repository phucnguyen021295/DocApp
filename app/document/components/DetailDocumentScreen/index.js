import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {withNavigation} from 'react-navigation';

import DocumentEvent from '../DocumentEvent';
import DCMHandlingListContainer from '../DocumentHandling/DCMHandlingListContainer';
import HeaderNavigation from '../../../main/components/HeaderNavigation';
import Text, {MediumText} from '../../../base/components/Text';
import DocumentTitle from './DocumentTitle';
import DocumentFileListContainenr from '../DocumentFile/DocumentFileListContainenr';

import styles from './styles/index.css';

// const  drawerLabel = 'Văn bản abc';
class DetailDocumentScreen extends Component {
    static navigationOptions = {
        gesturesEnabled: true
    };
    constructor(props) {
        super(props);
        this.state = {
            isLoadingFile: false,
        }
    }

    // componentDidMount() {
    //     BackHandler.addEventListener("hardwareBackPress", this.onGoBack);
    // }
    //
    // componentWillUnmount() {
    //     BackHandler.removeEventListener("hardwareBackPress", this.onGoBack);
    // }
    //
    // onGoBack = () => {
    //     this.props.navigation.goBack();
    //     return true;
    // };

    onLoadingFile = (isLoadingFile) => {
        this.setState({isLoadingFile: isLoadingFile})
    };

    render() {
        const {isLoadingFile} = this.state;
        const {navigation} = this.props;
        const documentId = navigation.getParam('documentId');
        const drawerLabel = navigation.getParam('drawerLabel');
        return (
            <SafeAreaView style={styles.container}>
                {
                    isLoadingFile ? <ActivityIndicator size="large" color="#0000ff" style={styles.loading} /> : null
                }
                <HeaderNavigation {...this.props} title={drawerLabel} isBtnBack={true} />
                <View style={styles.content}>
                    <DocumentEvent documentId={documentId} navigation={navigation} />
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <DocumentTitle documentId={documentId} />
                        {/*<View style={{paddingHorizontal: 15}}>*/}
                            {/*<Text text={'Chơơng trình công tác tháng 4/2019'} style={{color: '#000000', paddingVertical: 5}}/>*/}
                            {/*<View style={{flexDirection: 'row', paddingVertical: 5}}>*/}
                                {/*<MediumText text={'Số hiệu: '} style={{color: '#000000'}}/>*/}
                                {/*<Text text={'05-Ctr/ĐUK'} style={{color: '#000000'}}/>*/}
                            {/*</View>*/}
                        {/*</View>*/}
                        <View style={{marginBottom: 20}}>
                            <MediumText text={"Thông tin cơ bản(Xem chi tiết)"} style={styles.title}/>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <MediumText text={"Thông tin xử lý:"} style={styles.title}/>
                            <View style={{paddingHorizontal: 15}}>
                                <DCMHandlingListContainer documentId={documentId} />
                            </View>
                        </View>
                        <View style={{marginBottom: 20}}>
                            <MediumText text={"Tệp tin đính kèm:"} style={styles.title}/>
                            <DocumentFileListContainenr
                                documentId={documentId}
                                onLoadingFile={this.onLoadingFile}
                            />
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default withNavigation(DetailDocumentScreen);
