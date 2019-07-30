import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1
    },
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100
    },
    btn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: 55,
    },
});

export default styles;
