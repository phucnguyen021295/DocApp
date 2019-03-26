/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 20/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import storageBase from 'snw-base/lib/utils/storage/index';

// import reduxMqttMiddleware from './base/mqtt/reduxMqttMiddleware';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers'; // Import the reducer
import getRouterSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
        })
        : compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const configureStore = (initialState = {}, initMqttConfig) => {
    const middlewares = [
        sagaMiddleware,
    ];
    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    // Connect our store to the reducers
    const store = createStore(
        reducers,
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );
    sagaMiddleware.run(getRouterSaga);

    return store;
};

export default configureStore;