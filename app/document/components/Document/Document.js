import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {withNavigation} from 'react-navigation';

// Components
import Text, {MediumText} from '../../../base/components/Text';


import styles from './styles/index.css';

class Document extends Component {
    constructor(props) {
        super(props);
    }

    onChangeNavigation = () => {
        const {document} = this.props;
        debugger;
        const documentId = document.get('id');
        const url = 'http://mobile_qlvb.bacninh.gov.vn/document/view.json?id=' + documentId;
        // this.props.getDocument(documentId, url);
        this.props.getHandlingDoc(documentId, `http://mobile_qlvb.bacninh.gov.vn/document/history.json?id=${documentId}`);
        this.props.navigation.navigate("DetailUnProcessScreen", {documentId});
    };

    render() {
        const {document} = this.props;
        return (
            <TouchableOpacity onPress={this.onChangeNavigation} style={styles.btn}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text text={document.get('office_name')} style={[styles.textTitle, !document.get('status') && {color: '#980910', fontWeight: '600'}]} numberOfLines={1} />
                    <Text text={document.get('published_date')} style={styles.textDate} />
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text text={document.get('summary')} style={styles.text} numberOfLines={2} />
                </View>
            </TouchableOpacity>
        );
    }
}

Document.propTypes = {
    document: PropTypes.object,
    navigation: PropTypes.object,
    getDocument: PropTypes.func,
    getHandlingDoc: PropTypes.func
};

export default withNavigation(Document);