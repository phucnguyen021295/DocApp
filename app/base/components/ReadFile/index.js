/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 09/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Platform,
    Button,
    ActivityIndicator,
    NativeModules,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity

} from 'react-native';
import OpenFile from 'react-native-doc-viewer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

class DocumentViewerExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
            progress: "",
            donebuttonclicked: false,
        };
        // this.eventEmitter = new NativeEventEmitter(NativeModules.RNReactNativeDocViewer);
        // this.eventEmitter.addListener('DoneButtonEvent', (data) => {
        //     /*
        //     *Done Button Clicked
        //     * return true
        //     */
        //     console.log(data.close);
        //     this.setState({donebuttonclicked: data.close});
        // });
        // this.didPressToObjcButton = this.didPressToObjcButton.bind(this);
    }

    componentDidMount(){
        // download progress
        // this.eventEmitter.addListener(
        //     'RNDownloaderProgress',
        //     (Event) => {
        //         console.log("Progress - Download "+Event.progress  + " %")
        //         this.setState({progress: Event.progress + " %"});
        //     }
        //
        // );
    }

    componentWillUnmount (){
        // this.eventEmitter.removeListener();
    }

    /*
    * Binary in URL
    * Binary String in Url
    * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url you dont have an File Extensions
    */
    handlePressBinaryinUrl = () => {
        this.setState({animating: true});
        if(Platform.OS === 'ios'){
            OpenFile.openDocBinaryinUrl([{
                url:"https://storage.googleapis.com/need-sure/example",
                fileName:"sample",
                fileType:"xml"
            }], (error, url) => {
                if (error) {
                    console.error(error);
                    this.setState({animating: false});
                } else {
                    console.log(url)
                    this.setState({animating: false});
                }
            })
        }else{
            OpenFile.openDocBinaryinUrl([{
                url:"https://storage.googleapis.com/need-sure/example",
                fileName:"sample",
                fileType:"xml",
                cache:true
            }], (error, url) => {
                if (error) {
                    console.error(error);
                    this.setState({animating: false});
                } else {
                    console.log(url)
                    this.setState({animating: false});
                }
            })
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large"/>
                <Text style={styles.welcome}>
                    Doc Viewer React Native
                </Text>
                <TouchableOpacity onPress={this.handlePressBinaryinUrl}>
                    <Text>Press Me Open BinaryinUrl</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DocumentViewerExample;
