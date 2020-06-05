/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-31
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { GradeService } from '~/services/Grade';
import { RayFormSelect, RayFormSelectProps } from 'ray-web-common/lib/component/Form/RayFormSelect';

//
const GradehHook: React.FC = (props: RayFormSelectProps) => {
    const handleSearch = async () => {
        GradeService.query();
    };
    useEffect(() => {
        handleSearch();
    }, []);
    const {data} = GradeService;
    return (
        <RayFormSelect options={data}
                       setLabel={(option) => `${option.name}`}
                       setValue={(option) => `${option['_id']}`}
                       {...props}/>
    )
};

export const SelectGrade = observer(GradehHook);
