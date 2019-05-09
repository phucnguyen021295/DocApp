import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d7eb2'
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
        backgroundColor: 'red',
        width: 100,
        height: 36,
        marginLeft: -55,
        borderRadius: 5,
        zIndex: 2
    },
});

export default styles;
