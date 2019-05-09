import {connect} from 'react-redux';

// components
import ListDeptJobUser from './ListDeptJobUser';

// Selector.
import * as departmentUserSelectors from '../../selectors/departmentUserSelectors';

function mapStateToProps(state, onwProps) {
    const {departmentId} = onwProps;
    const department = departmentUserSelectors.get(state, departmentId);
    return {
        department: department,
    };
}


const ListDeptJobUserContainer = connect(mapStateToProps)(ListDeptJobUser);

export default ListDeptJobUserContainer;
