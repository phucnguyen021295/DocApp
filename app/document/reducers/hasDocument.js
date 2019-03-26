import {fromJS, remove } from 'immutable';
import createReducer from '../../shares/reducers/createReducer';

import hasDocumentDefault from './hasDocument.default';

const hasDocumentReducer = createReducer(fromJS(hasDocumentDefault), {
});

export default hasDocumentReducer;