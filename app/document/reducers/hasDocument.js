import {fromJS, remove } from 'immutable';
import createReducer from '../../base/reducers/createReducer';

import hasDocumentDefault from './hasDocument.default';

const hasDocumentReducer = createReducer(fromJS(hasDocumentDefault), {
});

export default hasDocumentReducer;