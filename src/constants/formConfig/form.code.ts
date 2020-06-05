/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-04
 */
import { RayFormItem } from 'ray-web-common/lib/component/Form';

export const configCode = {
    inputProps: {
        style: {width: 100}
    },
    itemProps: {
        name: "code",
        label: "邀请码",
        extra: '注册老师才需要填写'
    },
    required: false
};


export const formCode = RayFormItem(configCode);
