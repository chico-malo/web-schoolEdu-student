/*
 * @Author: yyao
 * @Date: 2020-04-30 16:53:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:19:06
 * @Description: edu-form-item 二次封装antd表单
 */
import React from "react";
import { Input, Form, Select } from "antd";
import { RayFormSelect } from './RayFormSelect';

export const RayFormItem = (config) => {
    const {setRules = {}, itemProps, inputProps} = config;
    const message = `请输入您的${itemProps.label}!`;
    const newInputProps = {
        placeholder: itemProps.label,
        ...inputProps
    };

    const _renderFormItem = () => {
        const {renderType} = config;
        if (renderType === 'select') {
            return <RayFormSelect {...newInputProps}/>
        }
        return <Input {...newInputProps} placeholder={itemProps.label}/>
    };

    return (
        <Form.Item
            rules={[{required: true, message, whitespace: true}, setRules]}
            {...itemProps}
        >
            {_renderFormItem()}
        </Form.Item>
    );
};
