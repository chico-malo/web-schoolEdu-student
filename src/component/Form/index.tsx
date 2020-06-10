/*
 * @Author: yyao
 * @Date: 2020-04-30 16:53:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:19:06
 * @Description: edu-form-item 二次封装antd表单
 */
import React from 'react'
import { Form } from 'antd'
import objectPath from 'object-path'
import { _renderFormItem, ConfigProps } from 'ray-web-common/lib/component/Form';


export const RayFormItem = (config: ConfigProps) => {
    const {itemProps, required = true} = config;
    const label = objectPath.get(itemProps, 'label');
    const message = `请输入您的${label}!`;

    return (
        <Form.Item
            rules={[{required: required, message, whitespace: true}]}
            {...itemProps}
        >
            {_renderFormItem(config)}
        </Form.Item>
    );
};
