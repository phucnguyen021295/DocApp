import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    View,
    VirtualizedList
} from 'react-native';
import DocumentContainer from '../Document/DocumentContainer';

class DocumentList extends Component {
    constructor(props) {
        super(props);
    }

    keyExtractor = (documentId) => documentId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <DocumentContainer documentId={data.item} drawerLabel={this.props.drawerLabel} />;

    render() {
        const {documentIds} = this.props;
        return (
            <View style={{flex: 1}} >
                <VirtualizedList
                    data={documentIds.toList()}
                    style={{flex: 1, paddingHorizontal: 15}}
                    getItemCount={this.getItemCount}
                    getItem={this.getItem}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

DocumentList.propTypes = {
    documentIds: PropTypes.array,
    getDoc: PropTypes.func
};

DocumentList.defaultProps = {
    documentIds: OrderedSet(),
};


export default DocumentList;