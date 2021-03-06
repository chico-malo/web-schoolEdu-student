/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-04
 */
import { lang } from '~/locales/zh-en';
import { FromConfigProps } from '~/constants/formConfig/interfaces/FromConfigProps';

export const configName = (name: FromConfigProps = 'name') => {
    return {
        itemProps: {
            label: lang.username,
            name,
        },
    }
};
