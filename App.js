/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';

// redux
import configureStore from './app/store';


const store = configureStore();

const prefix = '://';

import MainApp from './app/main/MainApp';

export default function App() {
    return (
        <Provider store={store}>
            <MainApp uriPrefix={prefix} />
        </Provider>
    );
}
