/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-01
 */
import React from "react";
import { lang } from '~/locales/zh-en';
import { Row, Tooltip } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";
import { RayFormItem } from '~/component/Form';

export const configUsername = {
    inputProps: {
        placeholder: lang.username,
    },
    itemProps: {
        name: "username",
        label: (
            <Row>
                {lang.username}&nbsp;
                <Tooltip title="你希望别人怎么称呼你?">
                    <QuestionCircleOutlined/>
                </Tooltip>
            </Row>
        ),
    }
};

export const formUsername = RayFormItem(configUsername);
