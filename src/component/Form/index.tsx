/*
 * @Author: yyao
 * @Date: 2020-04-30 16:53:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:19:06
 * @Description: edu-form-item 二次封装antd表单
 */
import React from "react";
import { DatePicker, Form, Input } from "antd";
import objectPath from 'object-path';
import { RayFormSelect } from './RayFormSelect';
import { FormItemProps } from 'antd/lib/form';

export interface ConfigItemProps extends FormItemProps {
    key?: string | number,
    children?: any
}

export interface ConfigProps {
    // formItemProps
    itemProps?: ConfigItemProps,
    // 输入框props 具体值得看是什么类型
    inputProps: any,

    // 统一设置是否必传
    required?: boolean,

    //
    renderType?: string,
    render?: (record) => any
}

export const RayFormItem = (config: ConfigProps) => {
    const {itemProps, inputProps, required = true} = config;
    const label = objectPath.get(itemProps, 'label');
    const message = `请输入您的${label}!`;

    const newInputProps = {
        placeholder: label,
        ...inputProps
    };

    const _renderFormItem = () => {
        const {renderType, render} = config;
        if (render) {
            return render(newInputProps);
        }
        if (renderType === 'select') {
            return <RayFormSelect {...newInputProps}/>
        }
        // 年月日
        if (renderType === 'date') {
            return <DatePicker {...newInputProps}/>
        }
        return <Input {...newInputProps}/>
    };

    return (
        <Form.Item
            rules={[{required: required, message, whitespace: true}]}
            {...itemProps}
        >
            {_renderFormItem()}
        </Form.Item>
    );
};
