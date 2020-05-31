/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-31
 */
import React, { useEffect } from 'react';
import { RayFormSelect, RayFormSelectProps } from '~/component/Form/RayFormSelect';
import { observer } from 'mobx-react';
import { GradeService } from '~/services/Grade';

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
