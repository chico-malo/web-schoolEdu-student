/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 */
import * as React from 'react';
import { lang } from '~/locales/zh-en';
import { genderOption } from '~/constants/select.option.gender';
import { SelectGrade } from '~/constants/select.grade';


export const userUpdateForm = [{
    itemProps: {
        label: lang.username,
        name: "name",
    },
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
        name: 'birthDay',
        label: lang.birthDay,
        rules: []
    },
    renderType: 'date',
}, {
    itemProps: {
        name: "age",
        label: lang.age,
    },
}, {
    itemProps: {
        name: "phone",
        label: lang.phone,
    },
}, {
    itemProps: {
        name: "email",
        label: lang.email,
    },
}, {
    itemProps: {
        name: "grade",
        label: lang.grade.name,
    },
    render: () => <SelectGrade/>,
}];
