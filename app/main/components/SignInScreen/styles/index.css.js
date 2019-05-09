import {StyleSheet, Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    picture: {
        // flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    containerLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: '#000000',
        fontWeight: '600',
        backgroundColor: 'transparent',
        marginTop: 20,
        fontSize: 16,
    },
    containerForm: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4267b2',
        paddingTop: '30%'
        // justifyContent: "center"
    },
    btnEye: {
        position: 'absolute',
        top: 9,
        right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    },
    inputWrapper: {
        // flex: 1,
        marginBottom: '2%'
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
    btnSignIn: {
        height: 40,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#123668',
        borderRadius: 20
    }
});

export default styles;