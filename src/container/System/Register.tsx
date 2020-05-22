/*
 * @Author: yyao
 * @Date: 2020-04-30 14:47:44
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 18:01:01
 * @Description: 用户-注册新用户
 */
import React, { useState } from "react";
import { observer } from 'mobx-react';
import { Button, Checkbox, Col, Form, Input, Row, Select, Tooltip, } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { SystemContainer } from "~/superClass/SystemContainer";
import { EduFormItem } from "~/component/eduFormItem";
import { LinkTip, TypeProps } from "./LinkTip";
import { SystemService } from '~/services/System';
import { lang } from '~/locales/zh-en';

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = ({onFinish, processing}) => {
    const [form] = Form.useForm();

    const [setAutoCompleteResult] = useState([]);

    return (
        <Form
            {...formItemLayout}
            form={form}
            className="register_form"
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
            }}
            scrollToFirstError
        >
            <h1 className="form_title">学籍管理系统-注册</h1>
            <div className="form_content">
                {EduFormItem({
                    itemProps: {
                        name: "username",
                        label: (
                            <span>
              姓名&nbsp;
                                <Tooltip title="你希望别人怎么称呼你?">
                <QuestionCircleOutlined/>
              </Tooltip>
            </span>
                        ),
                    },
                    title: "姓名",
                })}
                <Form.Item
                    name="password"
                    label="密码"
                    rules={[
                        {
                            required: true,
                            message: "请输入密码!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="二次确认"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "请确认您的密码!",
                        },
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject("您输入的两个密码不匹配!");
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="手机号码"
                    rules={[{required: true, message: "请输入你的电话号码!"}]}
                >
                    <Input style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item label="验证码" extra="我们必须确保你是人类">
                    <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item
                                name="captcha"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入你的验证码!",
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Button>验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject("需要确认协议"),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        我已经看过<a href="#">协议</a>了
                    </Checkbox>
                </Form.Item>
            </div>
            <LinkTip leftType={TypeProps.login} rightType={TypeProps.forgot}/>
            <Button type="primary" htmlType="submit" className="form_button" loading={processing}>
                {lang.login.register}
            </Button>
        </Form>
    );
};

@SystemContainer()
@observer
export default class extends React.Component {
    onSubmit = (values) => {
        console.log(values);
        SystemService.register(values);
    };

    render() {
        const {processing} = SystemService;
        return <RegistrationForm onFinish={this.onSubmit} processing={processing}/>;
    }
}
