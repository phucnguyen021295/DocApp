import {connect} from 'react-redux';

// Components
import Submission from './Submission';

// Selectors
import {getSubmission} from '../../selectors/submissionSelectors';

function mapStateToProps(state, ownProps) {
    const {submissionId} = ownProps;
    return {
        submission: getSubmission(state, submissionId),
    };
}

export default connect(mapStateToProps)(Submission);