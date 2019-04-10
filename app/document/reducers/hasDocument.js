import {fromJS, OrderedSet } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import {DOCUMENT} from '../actions/document';

import hasDocumentDefault from './hasDocument.default';

const add = (state, action) => {
    const {data, stateKeyChild} = action.payload;
    let itemIds = OrderedSet([]);
    data.get('list').map(item => {
        const id = item.get('id');
        itemIds = itemIds.add(id);
    });
    const page = 'page' + data.getIn(['pages', 'current']);
    return state.setIn([stateKeyChild, page, 'itemIds'], itemIds).
        setIn([stateKeyChild, page, 'items'], data.get('pages'));
};

const hasDocumentReducer = createReducer(fromJS({}), {
    [DOCUMENT.ADD]: add,
});

export default hasDocumentReducer;