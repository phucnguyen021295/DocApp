import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    View,
    VirtualizedList,
    RefreshControl, Platform, TouchableOpacity,
    Picker,
    StyleSheet
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import DocumentContainer from '../Document/DocumentContainer';
import Text from '../../../base/components/Text';
import Loading from './LoadingList';
import DCMLoading from '../Document/Loading';

import styles from "../../../main/components/HeaderNavigation/styles/index.css";
import Ionicons from "react-native-vector-icons/Ionicons";

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const loadingComp = (
    <DCMLoading />
);


class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            numberPage: '1'
        }

        this.inputRefs = {
            favSport1: null,
        };
    }

    keyExtractor = (documentId) => documentId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <DocumentContainer documentId={data.item} drawerLabel={this.props.drawerLabel} />;

    _refreshListView = () => {
        //Start Rendering Spinner
        this.setState({refreshing:true});
        this.props.decorateGetListRef.getNewer();
        const _that = this;
        setTimeout(() => {
            _that.setState({refreshing:false}) //Stop Rendering Spinner
        }, 1500);

    };

    onPrew = () => {
        const {page, updatePageDocument} = this.props;
        const itemValue = (parseInt(page) - 1).toString();
        updatePageDocument(itemValue);
        this.setState({numberPage: itemValue});
    };

    onNext = () => {
        const {page, updatePageDocument} = this.props;
        const itemValue = (parseInt(page) + 1).toString();
        updatePageDocument(itemValue);
        this.setState({numberPage: itemValue});
    };

    onValueChange = (itemValue) => {
        const {updatePageDocument} = this.props;
        this.setState({numberPage: itemValue});
        updatePageDocument((parseInt(itemValue)).toString());
    };

    renderItems = () => {
        const {pageItems} = this.props;
        let array = [];
        for(let i = 1; i <= pageItems.get('pageCount'); i++) {
            array.push({
                label: i.toString(),
                value: i.toString(),
            })
        }
        return array;
    };

    renderFooter = () => {
        const {pageItems, page} = this.props;

        const items = this.renderItems();

        return (
            <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={styles.btn}
                        disabled={page === '1' ? true : false}
                        onPress={this.onPrew}
                    >
                        <Ionicons
                            name={Platform.OS === 'ios' ? "ios-skip-backward" : "md-skip-backward"}
                            size={25}
                            color={"#000000"}
                        />
                    </TouchableOpacity>
                    <RNPickerSelect
                        // placeholder={placeholder}
                        items={items}
                        onValueChange={this.onValueChange}
                        value={this.state.numberPage}
                        style={pickerSelectStyles}
                        useNativeAndroidPickerStyle={false}
                        ref={(el) => {
                            this.inputRefs.favSport1 = el;
                        }}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.onNext}
                        disabled={page === pageItems.get('pageCount').toString() ? true : false}
                    >
                        <Ionicons
                            name={Platform.OS === 'ios' ? "ios-skip-forward" : "md-skip-forward"}
                            size={25}
                            color={"#000000"}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text text={`Tổng số: ${pageItems.get('totalRecord')}/ ${pageItems.get('pageCount')} trang`} />
                </View>
            </View>
        )
    };

    render() {
        const {pageItems, documentIds} = this.props;
        return (
            <View style={{flex: 1}}>
                {
                    documentIds.size === 0 ? (
                        <Loading
                            loadingComp={loadingComp}
                        />
                    ) : (
                        <VirtualizedList
                            data={documentIds.toList()}
                            contentContainerStyle={{paddingHorizontal: 15}}
                            getItemCount={this.getItemCount}
                            getItem={this.getItem}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this._refreshListView}
                                />
                            }
                            ListFooterComponent={pageItems && pageItems.get('totalRecord') !== 0 && pageItems.get('pageCount') !== 1 && this.renderFooter}
                        />
                    )
                }
            </View>
        );
    }
}

DocumentList.propTypes = {
    documentIds: PropTypes.array,
    getDoc: PropTypes.func,
    decorateGetListRef: PropTypes.object,
    page: PropTypes.String,
    updatePageDocument: PropTypes.func,
    pageItems: PropTypes.object,
};

DocumentList.defaultProps = {
    documentIds: OrderedSet(),
};


export default DocumentList;
