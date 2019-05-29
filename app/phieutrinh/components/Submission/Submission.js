import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    Platform,
    Alert,
    Linking
} from 'react-native';
import {withNavigation} from 'react-navigation';
import OpenFile from 'react-native-doc-viewer';

// Components
import Text, {MediumText} from '../../../base/components/Text';

// config
import {DOMAIN_FILE} from '../../../config';

import styles from './styles/index.css';
import convertFile from "../../../shares/convertFile";

class Submission extends Component {
    constructor(props) {
        super(props);
    }

    onAlert = (fileType) => {
        Alert.alert(
            'Thông báo',
            'Ứng dụng của bạn chưa có ứng dụng đọc doc',
            [
                {
                    text: 'Bỏ qua',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'Tải về', onPress: () => Linking.openURL('market://details?id=com.microsoft.office.word')},
            ],
            {cancelable: false},
        );
    };

    onChangeNavigation = () => {
        const {submission} = this.props;
        if(submission.get('file_name') !== null) {
            const {fileName, fileType, url} = convertFile(submission.get('file_name'));
            if(Platform.OS === 'android') {
                OpenFile.openDoc([{
                    url: url, // Local "file://" + filepath
                    fileName: fileName,
                    cache:true,
                    fileType: fileType
                }], (error, url) => {
                    if (error) {
                        this.onAlert(fileType);
                    } else {
                        this.setState({animating: false});
                        console.log(url)
                    }
                })
            } else {
                OpenFile.openDoc([{
                    url: url,
                    fileName: fileName,
                    cache:true,
                    fileType: fileType
                }], (error, url) => {
                    if (error) {
                        this.onAlert(fileType);
                    } else {
                        this.setState({animating: false});
                        console.log(url)
                    }
                })
            }
        }
    };

    render() {
        const {submission} = this.props;
        return (
            <TouchableOpacity onPress={this.onChangeNavigation.bind(this)} style={styles.btn}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text text={submission.get('ticket_name')} style={[styles.textTitle]} numberOfLines={1} />
                    {/*<Text text={document.get('published_date')} style={styles.textDate} />*/}
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text text={submission.get('summary')} style={styles.text} numberOfLines={2} />
                </View>
            </TouchableOpacity>
        );
    }
}

Submission.propTypes = {
    submission: PropTypes.object,
    navigation: PropTypes.object,
};

export default withNavigation(Submission);
