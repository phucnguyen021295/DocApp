/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 08/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    View,
    TouchableOpacity,
} from 'react-native';

// Components
import DCMHandlingUserContainer from './DCMHandlingUserContainer';
import Text, {MediumText} from '../../../base/components/Text';

import styles from './styles/index.css';

class DCMHandling extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {handlingDCM, handlingUserDCMIds} = this.props;
        return (
            <View>
                {
                    handlingDCM.get('action_type') === '1' ?
                        (
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <MediumText text={`[${handlingDCM.get('action_type')}] `} style={[styles.textTitle, {color: '#000000'}]} />
                                    <Text text={handlingDCM.get('assigned_by_name')} style={[styles.textTitle]} />
                                    <Text text={`  Đã ${handlingDCM.get('notes')}`} style={styles.textDate} />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text text={`${handlingDCM.get('notes')}(Vào lúc: ${handlingDCM.get('assigned_date')})`} style={styles.text} />
                                </View>
                            </View>
                        ) : handlingDCM.get('action_type') === '2' ?
                        (
                            <View style={{flexDirection: 'column'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <MediumText text={`[${handlingDCM.get('action_type')}] `} style={[styles.textTitle, {color: '#000000'}]} />
                                    <Text text={`${handlingDCM.get('assigned_by_name')} Gửi lãnh đạo vào:(${handlingDCM.get('assigned_date')})`} style={[styles.textTitle]} />
                                </View>
                                <Text text={`- Cho: ${handlingDCM.get('assigned_to_name')}`} style={styles.text}/>
                            </View>
                        ) :
                        (
                            <View style={{flexDirection: 'column'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <MediumText text={`[${handlingDCM.get('action_type')}] `} style={[styles.textTitle, {color: '#000000'}]} />
                                    <Text text={`${handlingDCM.get('assigned_by_name')} Chuyển bút ph:(${handlingDCM.get('assigned_date')})`} style={[styles.textTitle]}  />
                                </View>
                                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <Text text={'- Cho: '} style={styles.text}/>
                                    {
                                        handlingUserDCMIds.map(item => <DCMHandlingUserContainer handlingUserDCMId={item} />)
                                    }
                                </View>
                                <Text text={`${handlingDCM.get('notes')}`} style={styles.text}/>
                            </View>
                        )
                }
            </View>
        );
    }
}

DCMHandling.propTypes = {
    handlingDCM: PropTypes.object,
    handlingUserDCMIds: PropTypes.array
};

DCMHandling.defaultProps = {
    handlingUserDCMIds: OrderedSet(),
};

export default DCMHandling;