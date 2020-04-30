import React from "react";
import { Input, Form } from "antd";

/*
 * @Author: yyao
 * @Date: 2020-04-30 16:53:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:19:06
 * @Description: edu-form-item 二次封装antd表单
 */
export const EduFormItem = (config) => {
  const { title, setRules = {}, itemProps, inputProps } = config;
  const message = `请输入您的${title}!`;
  return (
    <Form.Item
      rules={[{ required: true, message, whitespace: true }, setRules]}
      {...itemProps}
    >
      <Input {...inputProps} placeholder={title} />
    </Form.Item>
  );
};
