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

function mapStateToProps(state) {
    return {
        documentIds: getItemIds(state, storeConfig.Document + 'denhan'),

        getListAction: getList,
        url: 'http://mobile_qlvb.bacninh.gov.vn/document/list.json?status=0&page=1',
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