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
        this.props.navigation.navigate("DetailUnProcessScreen");
    };

    render() {
        const {document} = this.props;
        return (
            <TouchableOpacity onPress={this.onChangeNavigation} style={styles.btn}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <MediumText text={document.get('title')} style={styles.text} />
                    <MediumText text={document.get('date')} style={styles.text} />
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
};

export default withNavigation(Document);