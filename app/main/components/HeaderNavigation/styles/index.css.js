import {StyleSheet} from 'react-native';
import {colorBlue} from '../../../../shares/styles/color'

const styles = StyleSheet.create({
    container: {
        height: 46,
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        alignItems: 'center',
        backgroundColor: colorBlue
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: 55,
    },
    title: {
        color: '#ffffff',
        paddingLeft: 30,
    }
});

export default styles;
