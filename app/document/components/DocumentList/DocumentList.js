import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    VirtualizedList
} from 'react-native';
import DocumentContainer from '../Document/DocumentContainer';

import styles from './styles/index.css';

class DocumentList extends Component {
    constructor(props) {
        super(props);
    }

    keyExtractor = (documentId) => documentId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <DocumentContainer documentId={data.item} />;

    render() {
        const {documentIds} = this.props;
        return (
            <VirtualizedList
                data={documentIds}
                style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 15}}
                getItemCount={this.getItemCount}
                getItem={this.getItem}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

DocumentList.propTypes = {
    documentIds: PropTypes.array,
};

export default DocumentList;