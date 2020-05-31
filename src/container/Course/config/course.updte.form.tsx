/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-28
 */
import * as React from 'react';
import { lang } from '~/locales/zh-en';
import { SelectTeach } from '~/constants/select.teach';

export const courseUpdateForm = [{
    itemProps: {
        label: lang.course.name,
        name: "name",
    },
    inputProps: {},
}, {
    itemProps: {
        label: lang.course.teach,
        name: "teach",
    },
    inputProps: {},
    render: () => <SelectTeach />
}, {
    itemProps: {
        name: 'descr',
        label: lang.descr,
    },
    inputProps: {},
}];