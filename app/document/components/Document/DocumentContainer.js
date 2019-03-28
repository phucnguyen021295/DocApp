import {connect} from 'react-redux';

// Components
import Document from './Document';

// Actions
import {objectUI} from '../../../base/apis/actionApi';

// Selectors
import {getDocument} from '../../selectors/documentSelectors';

function mapStateToProps(state, ownProps) {
    const {documentId} = ownProps;
    return {
        document: getDocument(state, documentId),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getDoc: (options) => dispatch(objectUI.getUi({options})),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);