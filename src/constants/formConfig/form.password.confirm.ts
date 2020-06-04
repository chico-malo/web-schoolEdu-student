/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-04
 */
import { RayFormItem } from '~/component/Form';
import { lang } from '~/locales/zh-en';

export const configPasswordConfirm = {
    renderType: 'password',
    itemProps: {
        label: lang.confirmPassword,
        name: "confirm",
        dependencies: ["password"],
        hasFeedback: true,
        rules: [
            {
                required: true,
                message: "请确认您的密码!",
            },
            ({getFieldValue}) => ({
                validator(rule, value) {
                    const password = getFieldValue("password");
                    if (!value || password === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject("您输入的两个密码不匹配!");
                },
            }),
        ]
    },
};

export const formPasswordConfirm = RayFormItem(configPasswordConfirm);
