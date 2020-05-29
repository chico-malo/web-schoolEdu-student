/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-29
 * 老师select
 */
import React, { useEffect } from 'react';
import { RayFormSelect, RayFormSelectProps } from '~/component/Form/RayFormSelect';
import { observer } from 'mobx-react';
import { TeachService } from '~/services/Teach';

//
const TeachHook: React.FC = (props: RayFormSelectProps) => {
    const handleSearch = async () => {
        TeachService.query();
    };
    useEffect(() => {
        handleSearch();
    }, []);
    const {data} = TeachService;
    return (
        <RayFormSelect options={data}
                       setLabel={(option) => `${option.name}`}
                       setValue={(option) => `${option['_id']}`}
                       {...props}/>
    )
};

export const SelectTeach = observer(TeachHook);
