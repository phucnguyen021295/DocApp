/* eslint-disable react/jsx-no-bind,react/prop-types,no-unused-vars */
/**
 * Copyright 2016-present, Bkav Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 04/04/2019.
 *
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function decorateGetList(WrappedComponent) {
    class DecorateGetList extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            this.getNewer();
        }

        getNewer = () => {
            const { getList, stateKeyChild, url } = this.props;
            getList(url, stateKeyChild);
        };

        render() {
            const {
                // searchKey,
                ...otherProps
            } = this.props;
            return (
                    <WrappedComponent {...otherProps} decorateGetListRef={this} />
            );
        }
    }

    DecorateGetList.propTypes = {
        getList: PropTypes.func,
        url: PropTypes.string,
        stateKeyChild: PropTypes.string,
    };

    function mapDispatchToProps(dispatch, ownProps) {
        // Phai truyen tru ngoai vao
        const { getListAction, url, stateKeyChild } = ownProps;
        return {
            getList: (url, stateKeyChild) => dispatch(getListAction(url, stateKeyChild)),
        };
    }

    const EnhancedComponentContainer = connect(null, mapDispatchToProps)(DecorateGetList);

    EnhancedComponentContainer.propTypes = {
        getListAction: PropTypes.func.isRequired, // CuongNT: Action dung dispatch lay du lieu
        getListSelector: PropTypes.object.isRequired, // CuongNT: Selector dung de truy cap cac thong tin lien quan toi getList: searchParams, queryParams.
        queryId: PropTypes.string.isRequired, // CuongNT: id cua object can lay danh sach object lien quan
        searchParams: PropTypes.object, // CuongNT: Moi bo dieu kien search bat buoc di kem 1 searchKey khong trung lap.
        searchKey: PropTypes.string, // CuongNT: Key dam bao duy nhat, dung de set vao state
    };

    return EnhancedComponentContainer;
}

export default decorateGetList;
