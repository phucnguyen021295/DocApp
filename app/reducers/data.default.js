/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 20/03/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

const uiStateDefault = {
    itemAbtracst: 0,
    turnOffNotify: {},
    statusReceiveMess: false,
    searchKey: '',
    statusPress: false,
    tag: {
        itemIds: ['1', '2'],
        items: {
            '1': {
                id: '1',
                title: 'Tất cả',
                type: '',
                activeTag: true,
                visible: false,
            },
            '2': {
                id: '2',
                title: 'Nhóm',
                type: 'group',
                activeTag: false,
                visible: false,
            },
        },
    },
    statusGetThreads: false,
};

export default uiStateDefault;