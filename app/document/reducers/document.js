import {fromJS, remove, Map } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {DOCUMENT} from '../actions/document';

// import documentDefault from './document.default';

const add = (state, action) => {
    const {data} = action.payload;
    return state.withMutations((stateNew) => {
        const list = data.get('list') || data.get('data');
        list.map(item => {
            const id = item.get('id');
            stateNew.mergeDeep(Map([[id, item]]));
        })
    });
};

const documentReducer = createReducer(fromJS({}), {
    [DOCUMENT.ADD]: add,
});

export default documentReducer;
