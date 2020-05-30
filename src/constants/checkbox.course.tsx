/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-30
 */
import React, { useEffect } from 'react';
import { RayFormSelectProps } from '~/component/Form/RayFormSelect';
import { observer } from 'mobx-react';
import { CourseService } from '~/services/Course';
import { Checkbox } from 'antd';

//
const CourseHook: React.FC = (props: RayFormSelectProps) => {
    const handleSearch = async () => {
        CourseService.query();
    };
    useEffect(() => {
        handleSearch();
    }, []);
    const {data} = CourseService;
    const newOption = [];
    data.forEach((item: any) => {
        const {_id, name, teach} = item;
        newOption.push({
            label: `${name}-${teach.name}`,
            value: _id
        })
    });
    return (
        <Checkbox.Group
            options={newOption}
            {...props}
        />
    )
};

export const CheckboxCourse = observer(CourseHook);
