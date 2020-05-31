/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-30
 */
import * as React from 'react';
import { lang } from '~/locales/zh-en';
import { Row } from 'antd';
import { Tags } from '~/component/Tags';

export const GradeManageColumn = [
    {
        title: lang.grade.name,
        dataIndex: 'name',
        width: 120
    }, {
        title: lang.course.name,
        dataIndex: 'courses',
        width: 300,
        render: value => {
            const setValue = (record) => {
                const {name, teach} = record;
                return `${name}-${teach.name}`;
            };
            return (
                <Row>
                    <Tags config={value} setValue={setValue}/>
                </Row>
            )
        }
    },
    {
        title: lang.descr,
        dataIndex: 'descr',
        width: 300,
    },
];
