'use strict';

import {fromJS, remove } from 'immutable';
import createReducer from '../shares/reducers/createReducer';

// import * as uiAction from '../actions/ui';
import uiStateDefault from './data.default';

// export const updateListNotifyCation = (state, action) => {
//     const { threadId, timestamp } = action.payload;
//     return state.setIn(['turnOffNotify', threadId, 'timestamp'], timestamp);
// };
//
// export const removeItemListNotifyCation = (state, action) => {
//     const threadId = action.payload;
//     const listItemNotify = state.get('turnOffNotify');
//     return state.set('turnOffNotify', remove(listItemNotify, threadId));
// };
//
// export const updateStateDefaultNotify = (state, action) => {
//     const dataNotifyGet = action.payload;
//     return state.set('notifyCation', dataNotifyGet);
// };
//
// export const updateStatusReceiveMess = (state, action) => {
//     const { status } = action.payload;
//     return state.set('statusReceiveMess', status);
// };
//
// export const updateStatusPress = (state, action) => {
//     const { status } = action.payload;
//     return state.set('statusPress', status);
// };
//
// export const updateSearchKey = (state, action) => {
//     const { searchKey } = action.payload;
//
//     // Todo: PhucNHb: Fix tam voi 2 truoc hop tat ca va nhom sau chuan se sua lai.
//     if(searchKey === '' || searchKey === 'group') {
//         return state.set('searchKey', searchKey);
//     }
//     return state;
// };
//
// export const updateTagSelected = (state, action) => {
//     const { tagId } = action.payload;
//
//     // Todo: PhucNHb: Fix tam voi 2 truoc hop tat ca va nhom thay doi selected tag.
//     if(tagId === '1' || tagId === '2') {
//         return state.updateIn(['tag', 'items'], (items) => items.map((item) => item.get('id') !== tagId ? item.set('activeTag', false) : item.set('activeTag', true)));
//     }
//     return state;
// };

const uiStateReducer = createReducer(fromJS(uiStateDefault), {
});

export default uiStateReducer;
