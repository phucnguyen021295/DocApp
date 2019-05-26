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

export const storeConfig = {
    auth: 'Auth',
    HasDocument: 'HasDocument',
    Document: 'Document',
    HasDetailDocument: 'HasDetailDocument',
    DetailDocument: 'DetailDocument',
    Submission: 'Submission',
    HasSubmission: 'HasSubmission',
    HasHandlingDCM: 'HasHandlingDCM',
    HandlingDCM: 'HandlingDCM',
    AssignTohis: 'AssignTohis',

    // File
    HasFileDocument: 'HasFileDocument',
    FileDocument: 'FileDocument',

    // calendar
    HasCalendar: 'HasCalendar',
    Calendar: 'Calendar',

    DepartmentUser: 'DepartmentUser',
    HasDepartment: 'HasDepartment',

    Me: 'Me',
    User: 'User',
    UserDepartment: 'UserDepartment',

    current: 'uiCurentState',

    // Key cac loai lich
    CalendarWorking: 'CalendarWorking',
    CalendarMeeting: 'CalendarMeeting',

    // Key loại văn bản
    DocumentUnprocess: 'DocumentUnproce',  // Văn bản chưa xử lý
    DocumentReceive: 'DocumentReceive',
    DocumentProcess: 'DocumentProcess',    // Văn bản đã xử lý
    DocumentInternal: 'DocumentInternal',  // Văn bẳn nội bộ
    DocumentAboutExprire: 'DocumentAboutExprire', // Văn bản sắp hết hạn xử lý.
    DocumentSearch: 'DocumentSearch',
};
