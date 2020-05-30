/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-30
 */
import React, { useEffect } from 'react';
import { RayFormSelect, RayFormSelectProps } from '~/component/Form/RayFormSelect';
import { observer } from 'mobx-react';
import { CourseService } from '~/services/Course';

//
const CourseHook: React.FC = (props: RayFormSelectProps) => {
    const handleSearch = async () => {
        CourseService.query();
    };
    useEffect(() => {
        handleSearch();
    }, []);
    const {data} = CourseService;
    return (
        <RayFormSelect options={data}
                       setLabel={(option) => `${option.name}`}
                       setValue={(option) => `${option['_id']}`}
                       mode="multiple"
                       optionLabelProp="label"
                       {...props}/>
    )
};

export const SelectCourse = observer(CourseHook);
