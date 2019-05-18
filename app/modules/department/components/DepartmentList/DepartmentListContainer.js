
import {connect} from 'react-redux';

import DepartmentList from './DepartmentList';

// Actions
import {transferText} from '../../../../document/actions/document';
import {updateChecked} from '../../../../ui/actions/current';

import {getMeId} from '../../../users/selectors/meSelectors';
import * as hasDepartmentSelectors from '../../selectors/hasDepartmentSelectors';
import {getCheckBoxByDept, getNotes} from '../../../../ui/selectors/currentSelectors';

function mapStateToProps(state) {
    const meId = getMeId(state);
    return {
        departmentIds: hasDepartmentSelectors.getItemIds(state, meId),
        userIds: getCheckBoxByDept(state, meId),
        notes: getNotes(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        transferText: (url, documentId, body) => dispatch(transferText(url, documentId, body)),
        removeChecked: (keyStore) => dispatch(updateChecked(keyStore, null, null)),
    };
}

export  default connect(mapStateToProps, mapDispatchToProps)(DepartmentList);
