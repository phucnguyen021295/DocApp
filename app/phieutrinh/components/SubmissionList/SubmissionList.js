import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {OrderedSet} from 'immutable';
import {
    View,
    VirtualizedList
} from 'react-native';
import SubmissionContainer from '../Submission/SubmissionContainer';

class SubmissionList extends Component {
    constructor(props) {
        super(props);
    }

    keyExtractor = (submissionId) => submissionId;

    getItemCount = (data) => data ? data.size : 0;

    getItem = (data, index) => data.get(index);

    renderItem = (data) => <SubmissionContainer submissionId={data.item} />;

    render() {
        const {submissionIds} = this.props;
        return (
            <View style={{flex: 1}}>
                <VirtualizedList
                    data={submissionIds.toList()}
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

SubmissionList.propTypes = {
    submissionIds: PropTypes.array,
};

SubmissionList.defaultProps = {
    submissionIds: OrderedSet(),
};


export default SubmissionList;