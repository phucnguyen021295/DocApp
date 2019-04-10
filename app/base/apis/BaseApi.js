
/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 04/04/19.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import {callApi} from './callApi';

class BaseApi {
    constructor(uriPattern, headers = {}) {
        this.headers = headers;
        this.uriPattern = uriPattern;
        // this.uriCompile = compile(uriPattern);
        this.fetch = this.fetch.bind(this);
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.patch = this.patch.bind(this);
        this.delete = this.delete.bind(this);
    }

    fetch(METHOD, uriParams, body, headers = {}) {
        // const _headers = Object.assign({'Content-Type': 'application/x-www-form-urlencoded'}, headers);
        const options = {
            method: METHOD,
            url: uriParams
        };

        if (body) {
            options.data = qs.stringify(body);
        }
        return callApi(options);
    }

    get(uriParams, body, headers = {}) {
        return this.fetch('GET', uriParams, body, headers);
    }

    post(uriParams, body, headers = {}) {
        return this.fetch('POST', uriParams, body, headers);
    }

    put(uriParams, body, headers = {}) {
        return this.fetch('PUT', uriParams, body, headers);
    }

    patch(uriParams, body, headers = {}) {
        return this.fetch('PATCH', uriParams, body, headers);
    }

    delete(uriParams, headers = {}) {
        return this.fetch('DELETE', uriParams, null, headers);
    }
}

export default BaseApi;