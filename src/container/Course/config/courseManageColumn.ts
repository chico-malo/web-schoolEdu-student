import { lang } from '~/locales/zh-en';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-28
 */

export const courseManageColumn = [
    {
        title: lang.course.name,
        dataIndex: 'name',
        filters: [
            {
                text: '语文',
                value: '语文',
            },
            {
                text: '数学',
                value: '',
            },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: lang.course.teach,
        dataIndex: 'teach',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.teach.length - b.teach.length,
    },
    {
        title: lang.descr,
        dataIndex: 'descr',
    },
];
