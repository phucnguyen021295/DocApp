import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const loadingCard = (
    <ActivityIndicator key="iconLoad" size="small" color={'red'} />
);

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        // Tinh toan so luong loading can hien thi giao dien
        const { loadingCompNumber, loadingComp } = props;
        for (let i = 1; i <= loadingCompNumber; i++) {
            this.loadingCards.push(loadingComp);
        }
    }

    loadingCards = [];

    render() {
        const {...otherProps} = this.props;
        return (
            <ScrollView
                key="load"
                contentContainerStyle={{paddingHorizontal: 15}}
                {...otherProps}
            >
                {this.loadingCards}
            </ScrollView>
        );
    }
}

Loading.propTypes = {
    loadingStyle: PropTypes.oneOf(['loading', 'card']),
    loadMoreComp: PropTypes.string,
    loadingComp: PropTypes.element,
    loadingCompNumber: PropTypes.number,
};

Loading.defaultProps = {
    loadingCompNumber: 10,
    loadingComp: loadingCard,
    loadingStyle: 'loading',
    loadMoreComp: 'Tải thêm',
};

export default Loading;
