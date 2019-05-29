import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import SubmissionList from './SubmissionList';

// Actions
import {getList} from '../../actions/submission';
import {updatePageSubmission} from '../../../ui/actions/current';

// Selectors
import {getItemIds, getItems} from '../../selectors/hasSubmissionSelectors';
import {getPageBySubmission} from '../../../ui/selectors/currentSelectors';

import decorateGetList from '../../../base/utils/decorateGetList';
import {storeConfig} from '../../../storeConfig';
import {DOMAIN} from '../../../config';

function mapStateToProps(state) {
    const page = getPageBySubmission(state);
    const url = `${DOMAIN}/tickets/listall.json?page=${page}`;
    return {
        submissionIds: getItemIds(state, page),
        pageItems: getItems(state, page),
        page,

        getListAction: getList,
        url: url,
        stateKeyChild: storeConfig.Submission
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updatePageSubmission: (page) => dispatch(updatePageSubmission(page)),
    }
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    decorateGetList
);

const SubmissionListContainer = enhance(SubmissionList);

export default SubmissionListContainer;
