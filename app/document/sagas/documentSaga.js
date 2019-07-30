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

import {all, call, take, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {OBJECT_UI, objectApi, OBJECT_TYPE} from '../../base/apis/actionApi';
import {fetchEntity} from '../../base/apis/fetchEntity';

import * as actionDoc from '../actions/document';
import * as actionDetailDoc from '../actions/detailDocument';
import * as actionHandlingDCM from '../actions/handlingDocument';
import * as actionFileDocument from '../actions/fileDocument';
import * as actionAssignTohis from '../actions/assignTohis';
import {DOMAIN} from "../../config";

// Get list document
const apiFn = fetchEntity.bind(null, objectApi.getList);

const watchGetListUi = function* watchGetListUi() {
    while (true) { // eslint-disable-line
        const datafetch = yield take(OBJECT_UI.GET_LIST_UI);
        const {condition} = datafetch;
        const {url, api} = condition;
        yield call(apiFn, api.get, url, condition);
    }
};

const isGetListDoccumentSuccess = function isGetListDoccumentSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET_LIST.SUCCESS &&  action.original.actionKey === 'docUi.getList';
};

const watchGetListDocumentSuccess = function* watchGetListDocumentSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetListDoccumentSuccess);
        const {payload, original} = fetchResult;
        const {stateKeyChild} = original;
        yield put(actionDoc.add(payload, stateKeyChild));
    }
};

// Get document by id
const apiGet = fetchEntity.bind(null, objectApi.get);

const watchGetUi = function* watchGetUi() {
    while (true) { // eslint-disable-line
        const datafetch = yield take(OBJECT_UI.GET_UI);
        const {condition} = datafetch;
        const {url, api} = condition;
        yield call(apiGet, api.get, url, condition);
    }
};

const watchGetDocumentDetailSuccess = function* watchGetDocumentDetailSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take('GET_DOCUMENT_DETAIL');
        const {documentId} = fetchResult.payload;
        yield put(actionAssignTohis.get(`${DOMAIN}/document/assignTohis.json?id=${documentId}`));

    }
};

const isGetDoccumentSuccess = function isGetDoccumentSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET.SUCCESS &&  action.original.actionKey === 'docUi.get';
};

const watchGetDocumentSuccess = function* watchGetDocumentSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetDoccumentSuccess);
        const {payload, original} = fetchResult;
        const {documentId} = original;
        yield put(actionDetailDoc.add(payload, documentId));
    }
};

// Get vawn banr xuwr lys
const isGetHandlingDoccumentSuccess = function isGetHandlingDoccumentSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET.SUCCESS && action.original.actionKey === 'handlingDCMUi.get';
};

const watchGetHandlingDocumentSuccess = function* watchGetHandlingDocumentSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetHandlingDoccumentSuccess);
        const {payload, original} = fetchResult;
        const {documentId} = original;
        yield put(actionFileDocument.get(documentId, `${DOMAIN}/document/attach.json?id=${documentId}`));
        yield put(actionHandlingDCM.add(payload, documentId));
    }
};

// Get file van ban
const isGetFileDoccumentSuccess = function isGetFileDoccumentSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET.SUCCESS && action.original.actionKey === 'fileDocUi.get';
};

const watchGetFileDocumentSuccess = function* watchGetFileDocumentSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetFileDoccumentSuccess);
        const {payload, original} = fetchResult;
        const {documentId} = original;
        yield put(actionFileDocument.add(payload, documentId));
    }
};

const isGetAssignToHisSuccess = function isGetAssignToHisSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.GET.SUCCESS &&  action.original.actionKey === 'assignUi.get';
};

const watchGetAssignToHisSuccess = function* watchGetAssignToHisSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isGetAssignToHisSuccess);
        const {payload} = fetchResult;
        const documentId = payload.getIn(['data', 'doc_id']);
        yield put(actionHandlingDCM.get(documentId, `${DOMAIN}/document/history.json?id=${documentId}`));
        yield put(actionAssignTohis.add(payload));
    }
};

const apiPost = fetchEntity.bind(null, objectApi.post);

const watchPostUi = function* watchPostUi() {
    while (true) { // eslint-disable-line
        const datafetch = yield take(OBJECT_UI.POST_UI);
        const {condition} = datafetch;
        const {url, api, body} = condition;
        yield call(apiPost, api.post.bind(api), url, condition, body);
    }
};

const isPostFinishTextSuccess = function isPostFinishTextSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.POST.SUCCESS &&  action.original.actionKey === 'docUi.finish.post';
};

const watchPostFinishTextSuccess = function* watchPostFinishTextSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isPostFinishTextSuccess);
        const {payload, original} = fetchResult;
        const {documentId} = original;
        yield put(actionAssignTohis.updateStstus(payload, documentId));
    }
};

const isPostTransferTextSuccess = function isPostTransferTextSuccess(action) {
    const actionType = action.type;
    return actionType && actionType === OBJECT_TYPE.POST.SUCCESS &&  action.original.actionKey === 'docUi.transfer.post';
};

const watchPostTransferTextSuccess = function* watchPostTransferTextSuccess() {
    while (true) { // eslint-disable-line
        const fetchResult = yield take(isPostTransferTextSuccess);
        debugger;
        const {payload, original} = fetchResult;
        const {documentId} = original;
        debugger;
    }
};

const getDocumentSaga = function* getDocumentSaga() {
    yield all([
        call(watchGetListUi),
        call(watchGetListDocumentSuccess),

        call(watchGetDocumentDetailSuccess),

        call(watchGetUi),
        call(watchGetDocumentSuccess),

        call(watchGetHandlingDocumentSuccess),

        call(watchGetFileDocumentSuccess),

        call(watchGetAssignToHisSuccess),

        call(watchPostUi),
        call(watchPostFinishTextSuccess),
        call(watchPostTransferTextSuccess),
    ]);
};

export default getDocumentSaga;
