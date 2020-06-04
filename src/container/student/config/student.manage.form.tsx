/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-02
 */
import * as React from 'react';
import objectPath from 'object-path';
import { userRegisterForm, userUpdateForm } from '~/container/User/config/user.update.form';
import { lang } from '~/locales/zh-en';
import { Cascader } from 'antd';

export const studentUpdateForm = (record = {}) => {
    const courses = objectPath.get(record, 'grade.courses') || [];
    let newOptions = [];
    courses.forEach(item => {
        let newItem: any = {
            value: item.name,
            label: item.name
        };
        let newItemChildren = [];
        if (item.exams) {
            item.exams.forEach(exam => {
                newItemChildren.push({
                    value: exam.name,
                    label: exam.name
                })
            });
            newItem = {
                ...newItem,
                children: newItemChildren
            }
        }
        newOptions.push(newItem)
    });
    return [
        ...userRegisterForm,
        ...userUpdateForm,
        {
            config: {
                dynamicName: 'exams',
                dynamicTitle: '成绩录入',
                dynamicAddName: '新增成绩',
            },
            dynamicField: [{
                itemProps: {
                    name: "course",
                    label: lang.exams.name,
                    rules: [{required: true}]
                },
                render: () => {
                    return <Cascader options={newOptions}/>
                }
            }, {
                itemProps: {
                    name: "scoreValue",
                    label: lang.course.name,
                },
            }]
        }
    ];
};
