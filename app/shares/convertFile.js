/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 26/05/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {DOMAIN_FILE} from '../config';

const convertFile = (file) => {
    const fileName = file.split('/')[file.split('/').length - 1];
    const fileType = fileName.split('.')[fileName.split('.').length - 1];
    const url = `${DOMAIN_FILE}${file.split('files')[1]}`;
    return {fileName, fileType, url};
};

export default convertFile;
