import {fromJS, OrderedSet, Map } from 'immutable';
import createReducer from '../../../base/reducers/createReducer';

import {DEPARTMENT_USER} from '../actions/departmentUser';

import departmentDefault from './hasDepartment.default';

const add = (state, action) => {
    const {data, meId} = action.payload;
    return state.withMutations((stateNew) => {
        let itemIds = OrderedSet([]);
        data.get('list').map(item => {
            const id = item.get('id');
            itemIds = itemIds.add(id);
        });
        stateNew.setIn([meId, 'itemIds'], itemIds);
    });
};

const hasDepartmentReducer = createReducer(fromJS({}), {
    [DEPARTMENT_USER.ADD]: add,
});

export default hasDepartmentReducer;
