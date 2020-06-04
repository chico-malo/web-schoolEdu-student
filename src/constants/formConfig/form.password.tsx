import { RayFormItem } from '~/component/Form';
import { lang } from '~/locales/zh-en';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-03
 */

export const configPassword = {
    renderType: 'password',
    itemProps: {
        label: lang.password,
        name: "password",
        hasFeedback: true,
    },
};

export const formPassword = RayFormItem(configPassword);
