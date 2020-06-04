/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 */
import * as React from 'react';
import { lang } from '~/locales/zh-en';
import { SelectGrade } from '~/constants/select.grade';
import { configUsername } from '~/constants/formConfig/form.username';
import { configPassword } from '~/constants/formConfig/form.password';
import { configPasswordConfirm } from '~/constants/formConfig/form.password.confirm';
import { configPhone } from '~/constants/formConfig/form.phone';
import { configCaptcha } from '~/constants/formConfig/form.captcha';
import { configAge } from '~/constants/formConfig/form.age';
import { configGender } from '~/constants/formConfig/form.gender';
import { configName } from '~/constants/formConfig/form.name';
import { configBirthDay } from '~/constants/formConfig/form.birthDay';
import { configEmail } from '~/constants/formConfig/form.email';

// 注册用户表单
export const userRegisterForm = [
    configUsername,
    configPassword,
    configPasswordConfirm,
    configPhone,
    configCaptcha
];

// 基本信息表单
export const userBaseInfoForm = [
    configName(['personal', 'name']),
    configGender(['personal', 'gender']),
    configBirthDay(['personal', 'birthDay']),
    configAge(['personal', 'age']),
    configEmail(['personal', 'email']),
];

export const userUpdateForm = [
    ...userBaseInfoForm, {
        itemProps: {
            name: "grade",
            label: lang.grade.name,
        },
        render: () => <SelectGrade/>,
    }];
