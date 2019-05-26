import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import DocumentList from './DocumentList';

// Actions
import {getList} from '../../actions/document';
import {updatePageDocument} from '../../../ui/actions/current';

// Selectors
import {getItemIds} from '../../selectors/hasDocumentSelectors';
import {getPageByDocument} from '../../../ui/selectors/currentSelectors';

import decorateGetList from '../../../base/utils/decorateGetList';
import {storeConfig} from '../../../storeConfig';
import {DOMAIN} from '../../../config';


function mapStateToProps(state) {
    const page = getPageByDocument(state, storeConfig.Document + 'denhan');
    const url = `${DOMAIN}/document/list.json?status=0&page=${page}`;
    return {
        documentIds: getItemIds(state, storeConfig.Document + 'denhan'),

        getListAction: getList,
        url: url,
        stateKey: storeConfig.Document,
        stateKeyChild: storeConfig.Document + 'denhan'
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updatePageDocument: () => dispatch(updatePageDocument())
    }
}

const enhance = compose(
    connect(mapStateToProps),
    decorateGetList
);

const DocumentListContainer = enhance(DocumentList);

export default DocumentListContainer;
