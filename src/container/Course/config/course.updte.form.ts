/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-28
 */
import { lang } from '~/locales/zh-en';

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
}, {
    itemProps: {
        name: 'descr',
        label: lang.descr,
    },
    inputProps: {},
}];
