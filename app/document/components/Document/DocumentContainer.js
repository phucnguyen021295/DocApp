import {connect} from 'react-redux';

// Components
import Document from './Document';

// Actions
import {get} from '../../actions/document';
import * as actionHandlingDoc from '../../actions/handlingDocument';
import * as assignTohis from '../../actions/assignTohis';

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
        getDocument: (documentId, url) => dispatch(get(documentId, url)),
        getHandlingDoc: (documentId, url) => dispatch(actionHandlingDoc.get(documentId, url)),
        getAssignToHis: (url) => dispatch(assignTohis.get(url)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);
