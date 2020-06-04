/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-04
 */
import { lang } from '~/locales/zh-en';
import { FromConfigProps } from '~/constants/formConfig/interfaces/FromConfigProps';

export const configBirthDay = (name: FromConfigProps = 'birthDay') => {
    return {
        itemProps: {
            name,
            label: lang.birthDay,
            rules: [{required: true}]
        },
        renderType: 'date',
    };
};
