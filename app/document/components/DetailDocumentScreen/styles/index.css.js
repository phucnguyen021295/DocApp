import {StyleSheet} from 'react-native';
import * as color from '../../../../shares/styles/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.colorBlue1
    },
    content: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    contentContainer: {
        // flex: 1,
    },
    title: {
        color: '#000000',
        backgroundColor: '#bbbbbb',
        paddingVertical: 5,
        paddingHorizontal: 15
    }
});

export default styles;
