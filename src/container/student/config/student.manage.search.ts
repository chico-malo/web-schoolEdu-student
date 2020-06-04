/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-02
 */
import { configUsername } from '~/constants/formConfig/form.username';
import { configName } from '~/constants/formConfig/form.name';
import { configGender } from '~/constants/formConfig/form.gender';
import { configAge } from '~/constants/formConfig/form.age';
import { configPhone } from '~/constants/formConfig/form.phone';

export const studentManageSearch = [
    configUsername,
    configName('personal.name'),
    configGender('personal.gender'),
    configAge('personal.age'),
    configPhone
];
