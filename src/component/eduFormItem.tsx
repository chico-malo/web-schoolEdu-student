import React from "react";
import { Input, Form, Select } from "antd";

/*
 * @Author: yyao
 * @Date: 2020-04-30 16:53:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:19:06
 * @Description: edu-form-item 二次封装antd表单
 */
export const EduFormItem = (config) => {
    const {title, setRules = {}, itemProps, inputProps} = config;
    const message = `请输入您的${title}!`;
    const newInputProps = {
        placeholder: itemProps.label,
        ...inputProps
    }

    const _renderFormItem = () => {
        const {renderType} = config;
        if (renderType === 'select') {
            return <Select
                {...newInputProps}
                onChange={this.onGenderChange}
                allowClear
            >
                <Select.Option value="male">male</Select.Option>
                <Select.Option value="female">female</Select.Option>
                <Select.Option value="other">other</Select.Option>
            </Select>
        }
        return <Input {...newInputProps} placeholder={title}/>
    }

    return (
        <Form.Item
            rules={[{required: true, message, whitespace: true}, setRules]}
            {...itemProps}
        >
            {_renderFormItem()}
        </Form.Item>
    );
};
