/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-29
 */
import { userBaseInfoForm } from '~/container/User/config/user.update.form';
import { lang } from '~/locales/zh-en';
import { configPhone } from '~/constants/formConfig/form.phone';

export const teachUpdateForm = [
    ...userBaseInfoForm,
    configPhone( ['personal', 'phone']),
    {
        itemProps: {
            label: lang.descr,
            name: ['personal', 'descr'],
        },
    }];
