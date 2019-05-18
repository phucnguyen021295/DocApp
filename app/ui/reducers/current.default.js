/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 05/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {storeConfig} from '../../storeConfig';

const uiStateDefault = {
    document: {
        [storeConfig.DocumentAboutExprire]: 'page1',
        [storeConfig.DocumentInternal]: 'page1',
        [storeConfig.DocumentProcess]: 'page1',
        [storeConfig.DocumentUnprocess]: 'page1',
        [storeConfig.DocumentReceive]: 'page1'
    },
    submission: 'page1',
    statusApp: '',
    unit: {},
    checked: {},
    action_type: {
        '1': 'đã đăng kí văn bản',
        '2': 'đã gửi văn bản cho lãnh đạo',
        '3': 'đã chuyển bút phê',
        '4': 'đã chuyển bút phê',
        '10': 'đã tạo hồ sơ công việc',
        'default': 'Chuyển tiếp văn bản'
    },
    checkBox: {}
};

export default uiStateDefault;
