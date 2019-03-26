import {connect} from 'react-redux';

// Components
import DocumentList from './DocumentList';

// Selectors
import {getItemIds} from '../../selectors/hasDocumentSelectors';

function mapStateToProps(state) {
    const meId = '123456';
    return {
        documentIds: getItemIds(state, meId),
    };
}


export default  connect(mapStateToProps)(DocumentList);