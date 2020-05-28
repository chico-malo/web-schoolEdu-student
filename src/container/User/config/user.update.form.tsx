/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 */
import { lang } from '~/locales/zh-en';
import { genderOption } from '~/constants/select.option.gender';


export const userUpdateForm = [{
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
}, {
    itemProps: {
        name: 'createAT',
        label: lang.createAT,
    },
    inputProps: {},
}, {
    itemProps: {
        name: "age",
        label: lang.age,
    },
    inputProps: {},
}, {
    itemProps: {
        name: "phone",
        label: lang.phone,
    },
    inputProps: {},
}, {
    itemProps: {
        name: "email",
        label: lang.email,
    },
    inputProps: {},
}, {
    itemProps: {
        name: "class",
        label: lang.class,
    },
    inputProps: {},
}]
