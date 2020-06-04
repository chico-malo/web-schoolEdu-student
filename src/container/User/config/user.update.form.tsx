/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 */
import * as React from 'react';
import { lang } from '~/locales/zh-en';
import { genderOption } from '~/constants/select.option.gender';
import { SelectGrade } from '~/constants/select.grade';
import { configUsername } from '~/constants/formConfig/form.username';
import { configPassword } from '~/constants/formConfig/form.password';
import { configPasswordConfirm } from '~/constants/formConfig/form.password.confirm';
import { configPhone } from '~/constants/formConfig/form.phone';
import { configCaptcha } from '~/constants/formConfig/form.captcha';

// 注册用户表单
export const userRegisterForm = [
    configUsername,
    configPassword,
    configPasswordConfirm,
    configPhone,
    configCaptcha
];


// 基本信息表单
export const userBaseInfoForm = [{
    itemProps: {
        label: lang.name,
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
        name: "email",
        label: lang.email,
    },
}];

export const userUpdateForm = [
    ...userBaseInfoForm, {
        itemProps: {
            name: "grade",
            label: lang.grade.name,
        },
        render: () => <SelectGrade/>,
    }];
