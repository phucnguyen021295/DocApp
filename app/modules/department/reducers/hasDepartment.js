import {fromJS, remove, Map } from 'immutable';
import createReducer from '../../../base/reducers/createReducer';

// import {DEPARTMENT_USER} from '../actions/departmentUser';

import departmentDefault from './hasDepartment.default';

const add = (state, action) => {
    const {data} = action.payload;
    return state.withMutations((stateNew) => {
        data.get('list').map(item => {
            const id = item.get('id');
            stateNew.mergeDeep(Map([[id, item]]));
        })
    });
};

const hasDepartmentReducer = createReducer(fromJS(departmentDefault), {
    // [DEPARTMENT_USER.ADD]: add,
});

export default hasDepartmentReducer;
