import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import SubmissionList from './SubmissionList';

// Actions
import {getList} from '../../actions/submission';

// Selectors
import {getItemIds} from '../../selectors/hasSubmissionSelectors';
import {getPageBySubmission} from '../../../ui/selectors/currentSelectors';

import decorateGetList from '../../../base/utils/decorateGetList';
import {storeConfig} from '../../../storeConfig';
import {DOMAIN} from '../../../config';

function mapStateToProps(state) {
    const page = getPageBySubmission(state);
    debugger;
    return {
        submissionIds: getItemIds(state, page),

        getListAction: getList,
        url: 'http://mobile_qlvb.bacninh.gov.vn/tickets/listall.json?page=1',
        stateKeyChild: storeConfig.Submission
    };
}

const enhance = compose(
    connect(mapStateToProps),
    decorateGetList
);

const SubmissionListContainer = enhance(SubmissionList);

export default SubmissionListContainer;
