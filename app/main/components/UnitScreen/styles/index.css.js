import {StyleSheet, Platform} from 'react-native';
import * as color from '../../../../shares/styles/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.colorBlue1
    },


    autocompleteContainer: {
        // flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 240,
        bottom: 0,
        // zIndex: 1,
        paddingHorizontal: 15
    },

    autocompleteContainer1: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },

    btnConnect: {
        // flex: 1,
        left: '50%',
        position: 'absolute',
        // right: '50%',
        top: 290,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c61d1d',
        width: 100,
        height: 36,
        marginLeft: -55,
        borderRadius: 5,
        zIndex: 2
    },

    inputContainerStyle: {
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#bbbbbb',
        backgroundColor: '#ffffff',
        ...Platform.select({
            ios: {
                lineHeight: 40,
                justifyContent: 'center'
                // backgroundColor: 'red',
            },
            android: {
                marginHorizontal: 11,
            },
        }),
    }
});

export default styles;
