import {fromJS, OrderedSet } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {DOCUMENT} from '../actions/document';
// import {ASSIDNTOHIS} from '../actions/assignTohis';

// import hasDocumentDefault from './hasDocument.default';

const add = (state, action) => {
    const {data, stateKeyChild} = action.payload;
    let itemIds = OrderedSet([]);
    const list = data.get('list') || data.get('data');
    list.map(item => {
        const id = item.get('id');
        itemIds = itemIds.add(id);
    });
    const page = data.getIn(['pages', 'current']).toString();
    return state.setIn([stateKeyChild, page, 'itemIds'], itemIds).
        setIn([stateKeyChild, page, 'items'], data.get('pages'));
};

const hasDocumentReducer = createReducer(fromJS({}), {
    [DOCUMENT.ADD]: add,
});

export default hasDocumentReducer;
