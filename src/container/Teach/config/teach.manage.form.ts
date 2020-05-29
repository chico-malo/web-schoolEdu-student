/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-29
 */
import { lang } from '~/locales/zh-en';
import { genderOption } from '~/constants/select.option.gender';

export const teachUpdateForm = [{
    itemProps: {
        label: lang.username,
        name: "name",
    },
    inputProps: {},
}, {
    itemProps: {
        label: lang.gender,
        name: "gender",
    },
    renderType: 'select',
    inputProps: {
        options: genderOption
    },
},  {
    itemProps: {
        label: lang.age,
        name: "age",
    },
    inputProps: {},
}, {
    itemProps: {
        label: lang.email,
        name: "email",
    },
    inputProps: {},
}, {
    itemProps: {
        label: lang.phone,
        name: "phone",
    },
    inputProps: {},
},{
    itemProps: {
        name: 'descr',
        label: lang.descr,
    },
    inputProps: {},
}];
