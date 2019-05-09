/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 03/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import axios from 'axios';
import qs from 'qs';

// const Code2xx = [204, 205];
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
    const {status} = response;
    // 204 No Content: The server successfully processed the request and is not returning any content.[14]
    // 205 Reset Content: The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.[15]
    if (status === 204 || status === 205) { // HieuNVb: Response with "No Content"
        return {status}; // Added DamBV 26/12/201&: fix de tao thread 1-1
    }
    return response.data;
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const callApi = (data, url) => {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: 'http://mobile_qlvb.bacninh.gov.vn/login/auth.json',
    };
    return axios(options)
        .then(checkStatus)
        .then(parseJSON)
        .then(
            (response) => ({response}),
            (error) => ({error}
        )
    );
};
