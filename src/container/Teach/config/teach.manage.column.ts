import { lang } from '~/locales/zh-en';
import { genderMapping } from '~/constants/select.option.gender';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-29
 */
export const TeachManageColumn = [
    {
        title: lang.username,
        dataIndex: 'name',
    }, {
        title: lang.gender,
        dataIndex: 'gender',
        render: value => genderMapping[value]
    }, {
        title: lang.age,
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    }, {
        title: lang.email,
        dataIndex: 'email',
    }, {
        title: lang.phone,
        dataIndex: 'phone',
    },
    {
        title: lang.descr,
        dataIndex: 'descr',
        width: 350
    },
];
