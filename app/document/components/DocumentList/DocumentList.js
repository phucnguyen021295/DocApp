import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    View,
    VirtualizedList,
    RefreshControl
} from 'react-native';
import DocumentContainer from '../Document/DocumentContainer';

class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    keyExtractor = (documentId) => documentId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <DocumentContainer documentId={data.item} drawerLabel={this.props.drawerLabel} />;

    _refreshListView(){
        //Start Rendering Spinner
        this.setState({refreshing:true});
        this.props.decorateGetListRef.getNewer();
        this.setState({refreshing:false}) //Stop Rendering Spinner
    }

    render() {
        const {documentIds} = this.props;
        return (
            <View style={{flex: 1}} >
                <VirtualizedList
                    data={documentIds.toList()}
                    contentContainerStyle={{paddingHorizontal: 15}}
                    style={{flex: 1}}
                    getItemCount={this.getItemCount}
                    getItem={this.getItem}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                />
            </View>
        );
    }
}

DocumentList.propTypes = {
    documentIds: PropTypes.array,
    getDoc: PropTypes.func,
    decorateGetListRef: PropTypes.object
};

DocumentList.defaultProps = {
    documentIds: OrderedSet(),
};


export default DocumentList;
