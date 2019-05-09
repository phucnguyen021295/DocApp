
import {connect} from 'react-redux';
import * as hasDepartmentSelectors from '../../selectors/hasDepartmentSelectors';
import DepartmentList from './DepartmentList';

function mapStateToProps(state) {
    return {
        departmentIds: hasDepartmentSelectors.getItemIds(state, '123456'),
    };
}

export  default connect(mapStateToProps)(DepartmentList);
