import { lang } from '~/locales/zh-en';
import objectPath from 'object-path';

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
        dataIndex: ['teach', 'name'],
        defaultSortOrder: 'descend',
    },
    {
        title: lang.exams.total,
        dataIndex: 'total',
        render: (value, record) => {
            const exams = objectPath.get(record, 'exams');
            return exams && exams.length || 0;
        },
        sorter: (a, b) => {
            const aExams = objectPath.get(a, 'exams');
            const bExams = objectPath.get(b, 'exams');
            if (aExams && bExams) {
                return aExams.length - bExams.length;
            }
        },
    },
    {
        title: lang.descr,
        dataIndex: 'descr',
    },
];
