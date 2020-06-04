/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-04
 */
import { lang } from '~/locales/zh-en';
import { FromConfigProps } from './interfaces/FromConfigProps';

export const configAge = (name: FromConfigProps = 'age') => {
    return {
        itemProps: {
            label: lang.age,
            name,
        },
    }
};
