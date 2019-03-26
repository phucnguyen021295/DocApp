/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider, connect } from 'react-redux';

// redux
import configureStore from './app/store';


const store = configureStore();

const prefix = 'vala://';

// import Child from './app/components/Child';
import MainApp from './app/main/MainApp';
// // import ButtonComp from './app/components/Button';
//
// class MainApp extends Component {
//     render() {
//         return (
//             <View style={{
//                 flex: 1,
//                 width: '100%',
//                 justifyContent: 'center'
//             }}
//             >
//                 <View style={{
//                     flex: 1,
//                     justifyContent:"center",
//                     alignItems:"center"
//                 }}>
//                     <Child/>
//                 </View>
//             </View>
//         )
//     }
// }
//
// function mapStateToProps(state) {
//     debugger;
//     return {
//         keyboardHeight: 'abc',
//     };
// }
//
// const App1 = connect(mapStateToProps)(MainApp);

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});


export default function App() {
    return (
        <Provider store={store}>
            <MainApp uriPrefix={prefix} />
        </Provider>
    );
}
