/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-02
 */
import { lang } from '~/locales/zh-en';
import { genderMapping } from '~/constants/select.option.gender';
import moment from 'moment';

export const studentManageColumn = [{
    dataIndex: 'username',
    title: lang.username,
}, {
    dataIndex: 'phone',
    title: lang.phone,
}, {
    dataIndex: ['personal', 'name'],
    title: lang.name,
}, {
    title: lang.gender,
    dataIndex: ['personal', 'gender'],
    render: value => genderMapping[value]
}, {
    dataIndex: ['personal', 'age'],
    title: lang.age,
}, {
    dataIndex: ['personal', 'birthDay'],
    title: lang.birthDay,
    render: value => moment(value).format('lll')
}, {
    dataIndex: ['grade', 'name'],
    title: lang.grade.name,
}];
