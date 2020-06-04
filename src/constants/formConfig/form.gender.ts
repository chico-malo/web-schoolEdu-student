import { lang } from '~/locales/zh-en';
import { genderOption } from '~/constants/select.option.gender';
import { FromConfigProps } from '~/constants/formConfig/interfaces/FromConfigProps';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-04
 * 性别
 */
export const configGender = (name: FromConfigProps = 'gender') => {
    return {
        itemProps: {
            label: lang.gender,
            name,
        },
        renderType: 'select',
        inputProps: {
            options: genderOption
        },
    };
};
