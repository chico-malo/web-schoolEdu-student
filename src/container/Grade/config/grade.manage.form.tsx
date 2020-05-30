/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-30
 */
import * as React from 'react';
import { lang } from '~/locales/zh-en';
import { CheckboxCourse } from '~/constants/checkbox.course';

export const GradeUpdateForm = [{
    itemProps: {
        label: lang.username,
        name: "name",
    },
    inputProps: {},
}, {
    itemProps: {
        name: 'descr',
        label: lang.descr,
    },
    inputProps: {},
}, {
    itemProps: {
        label: lang.course.name,
        name: "courses",
        style: {
            marginLeft: -135,
            width: '100%'
        },
        rules: [],
    },
    render: (props) => <CheckboxCourse {...props}/>
}];
