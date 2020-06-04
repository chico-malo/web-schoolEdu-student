import { RayFormItem } from '~/component/Form';
import { lang } from '~/locales/zh-en';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-01
 */

export const configPhone = {
    itemProps: {
        name: "phone",
        label: lang.phone
    },
};

export const formPhone = RayFormItem(configPhone);
