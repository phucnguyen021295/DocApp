import {fromJS, remove } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import documentDefault from './document.default';

const documentReducer = createReducer(fromJS(documentDefault), {
});

export default documentReducer;