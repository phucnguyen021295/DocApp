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
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': "application/json",
        //         'Company-Id': '71124658431777',
        //         'Authorization': 'eyJ0eXBlIjoiand0IiwiYWxnIjoiUlM1MTIiLCJraWQiOiIwIn0.eyJzdWIiOiIyMTEyNDM2NzE0OTY1OTkiLCJhdWQiOiIxMjM0LTU2NzgtOTEwIiwibmJmIjoxNTUzNzU2NzQ4LCJpc3MiOiJzc28uc253LmNvbSIsImFsaWFzIjoiMjExMjQzNjcxNDk2NTk5LTE0ZWYtMTAyLWYwMSIsImlkIjoiMjExMjQzNjcxNDk2NTk5IiwiZXhwIjoxNTU0MzYxNTQ4LCJpYXQiOjE1NTM3NTY3NDgsImVtYWlsIjoicGh1Y25oYkBia2F2LmNvbSJ9.NWBvrU9gfAnAUPdyd6I_mAarDkL-BIVxvNqEsenX9Ba-FIq9SpYIt_-IWKTcXieu7B-iUbq-zatfWcjMoC8md48jQ5Aa7pZZeLIEQLbVO3_N0tWAfbT_4vuXOJ6voOOUi_tdWeaNSg_WERHbYyTWW1vVMdkUY2fDrjJgmr0vfP9EgS9emOOBW1GSxsGLeQvNBG1cbbrio3quizZ9ifjpUCRBwIZzKi6ykO1mBz_y2wia2nusY3AyRQlb1Fii6zD3fblFgg843u2FsbHoVEY1QDtB9AWUl_LpLrWtA10AK90hW28DZe8hRUGUh6nbqQK46kyIvrI1jsEjDyjCiIF-Ig',
        //     },
        //     url: 'https://messengervala.bkav.com/211243671496599/threads?limit=7&maxscore=1553652668415',
        // };
        // this.props.getDoc(options);
        debugger;
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
    getDoc: PropTypes.func
};

export default withNavigation(Document);