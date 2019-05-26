import {connect} from 'react-redux';

// Components
import Document from './Document';

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
        getDocumentDetail: (documentId) => dispatch({type: 'GET_DOCUMENT_DETAIL', payload: {documentId}}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);
