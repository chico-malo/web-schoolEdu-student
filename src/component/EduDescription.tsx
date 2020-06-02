import { Descriptions } from 'antd';
import * as React from 'react';
import { lang } from '~/locales/zh-en';
import objectPath from 'object-path';
import { DescriptionsProps } from 'antd/lib/descriptions';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-02
 */

export interface EduDescriptionProps {
    containerProps?: DescriptionsProps,
    setLabel?: (item, key, defaultValue) => string
    setValue?: (item, key) => string
    dataSource: object
}

export const EduDescription: React.FC = (props: EduDescriptionProps) => {
    const {containerProps, setValue, setLabel, dataSource} = props;
    return (
        <Descriptions {...containerProps}>
            {
                Object.keys(dataSource).map((key, index) => {
                    const defaultLabel = objectPath.get(lang, key);
                    const label = setLabel ? setLabel(dataSource, key, defaultLabel) : defaultLabel;
                    const value = setValue ? setValue(dataSource, key) : dataSource[key];
                    return <Descriptions.Item key={index} label={label}>{value}</Descriptions.Item>
                })
            }
        </Descriptions>
    )
};
