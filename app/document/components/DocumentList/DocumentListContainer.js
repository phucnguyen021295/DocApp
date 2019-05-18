import {compose} from 'redux';
import {connect} from 'react-redux';

// Components
import DocumentList from './DocumentList';

// Actions
import {getList} from '../../actions/document';

// Selectors
import {getItemIds} from '../../selectors/hasDocumentSelectors';

import decorateGetList from '../../../base/utils/decorateGetList';
import {storeConfig} from '../../../storeConfig';
import {DOMAIN} from '../../../config';

const url = `${DOMAIN}/document/list.json?status=0&page=1`;

function mapStateToProps(state) {
    return {
        documentIds: getItemIds(state, storeConfig.Document + 'denhan'),

        getListAction: getList,
        url: url,
        stateKey: storeConfig.Document,
        stateKeyChild: storeConfig.Document + 'denhan'
    };
}

const enhance = compose(
    connect(mapStateToProps),
    decorateGetList
);

const DocumentListContainer = enhance(DocumentList);

export default DocumentListContainer;
