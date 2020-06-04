import { RayFormItem } from '~/component/Form';
import { lang } from '~/locales/zh-en';
import { FromConfigProps } from '~/constants/formConfig/interfaces/FromConfigProps';

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
