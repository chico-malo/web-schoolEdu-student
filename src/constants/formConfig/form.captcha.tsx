/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-01
 */
import * as React from "react";
import { RayFormItem } from '~/component/Form';
import { Row } from 'antd';
import { lang } from '~/locales/zh-en';

export const configCaptcha = {
    inputProps: {
        addonAfter: <Row>验证码</Row>
    },
    itemProps: {
        label: lang.captcha,
        name: 'captcha',
        extra: '我们必须确保你是人类'
    },
}
export const formCaptcha = RayFormItem(configCaptcha);
