import { lang } from '~/locales/zh-en';
import { FromConfigProps } from '~/constants/formConfig/interfaces/FromConfigProps';
import { RayFormItem } from 'ray-web-common/lib/component/Form';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-01
 */

export const configPhone = (name: FromConfigProps = 'phone') => {
    return {
        itemProps: {
            name,
            label: lang.phone
        },
    }
};

export const formPhone = RayFormItem(configPhone());
