import * as React from 'react';
import { Space, Tag } from 'antd';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-30
 */
const colors = ['red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

export const Tags: React.FC = (props) => {
    const {config, setValue} = props;
    return (
        <>
            {config.map((item, index) => {
                const colorRandom = Math.floor(Math.random() * 10 + 1);
                return <Tag key={index} color={colors[colorRandom]}
                            style={{marginRight: 5, marginBottom: 5}}>{setValue(item)}</Tag>
            })}
        </>
    )
};
