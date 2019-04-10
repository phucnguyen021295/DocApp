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

class Submission extends Component {
    constructor(props) {
        super(props);
    }

    onChangeNavigation = () => {
        const {submission} = this.props;
        const uri = submission.get('file_name');
        debugger;
        this.props.navigation.navigate("DetailPhieuTrinhScreen", {uri});
    };

    render() {
        const {submission} = this.props;
        return (
            <TouchableOpacity onPress={this.onChangeNavigation} style={styles.btn}>
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