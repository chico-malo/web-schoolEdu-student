import { lang } from '~/locales/zh-en';
import { genderOption } from '~/constants/select.option.gender';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-29
 */
export const teachManageSearch = [{
    itemProps: {
        label: lang.username,
        name: "name",
    },
    inputProps: {},
}, {
    itemProps: {
        label: lang.gender,
        name: "gender",
    },
    renderType: 'select',
    inputProps: {
        options: genderOption
    },
}];
