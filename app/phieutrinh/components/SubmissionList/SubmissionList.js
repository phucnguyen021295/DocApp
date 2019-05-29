import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    Picker, Platform, RefreshControl, StyleSheet, TouchableOpacity,
    View,
    VirtualizedList
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import SubmissionContainer from '../Submission/SubmissionContainer';
import styles from "../../../main/components/HeaderNavigation/styles/index.css";
import Ionicons from "react-native-vector-icons/Ionicons";
import Text from "../../../base/components/Text";

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

class SubmissionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            numberPage: 1
        }
    }

    keyExtractor = (submissionId) => submissionId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <SubmissionContainer submissionId={data.item} />;

    _refreshListView = () => {
        //Start Rendering Spinner
        this.setState({refreshing:true});
        this.props.decorateGetListRef.getNewer();
        this.setState({refreshing:false}) //Stop Rendering Spinner
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
                    {/*<Picker*/}
                    {/*    selectedValue={this.state.numberPage}*/}
                    {/*    style={{height: 50, width: 80, borderColor: '#000000', borderWidth: 1}}*/}
                    {/*    onValueChange={this.onValueChange}>*/}
                    {/*    {this.renderItems()}*/}
                    {/*</Picker>*/}
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
        const {submissionIds, pageItems} = this.props;
        return (
            <View style={{flex: 1}}>
                <VirtualizedList
                    data={submissionIds.toList()}
                    contentContainerStyle={{paddingHorizontal: 15}}
                    style={{flex: 1}}
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
            </View>
        );
    }
}

SubmissionList.propTypes = {
    submissionIds: PropTypes.array,
    pageItems: PropTypes.object,
    page: PropTypes.String,
};

SubmissionList.defaultProps = {
    submissionIds: OrderedSet(),
};


export default SubmissionList;
