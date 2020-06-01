/*
 * @Author: yyao
 * @Date: 2020-04-30 14:47:44
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 18:01:01
 * @Description: 用户-注册新用户
 */
import React, { useState } from "react";
import { observer } from 'mobx-react';
import { Button, Col, Form, Input, Row, Tooltip, } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { SystemContainer } from "~/superClass/SystemContainer";
import { LinkTip, TypeProps } from "./LinkTip";
import { SystemService } from '~/services/System';
import { lang } from '~/locales/zh-en';
import { RayFormItem } from "~/component/Form";

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
                {RayFormItem({
                    inputProps: {
                        name: "username",
                        placeholder: lang.username,
                    },
                    itemProps: {
                        label: (
                            <Row>
                                {lang.username}&nbsp;
                                <Tooltip title="你希望别人怎么称呼你?">
                                    <QuestionCircleOutlined/>
                                </Tooltip>
                            </Row>
                        ),
                    }
                })}
                {RayFormItem({
                    inputProps: {
                        name: "password",
                        hasFeedback: true,
                        renderType: 'password'
                    },
                    itemProps: {
                        label: lang.password
                    },
                })}
                {RayFormItem({
                    inputProps: {
                        name: "confirm",
                        hasFeedback: true,
                        dependencies: ["password"],
                        renderType: 'password'
                    },
                    itemProps: {
                        label: lang.confirmPassword,
                        rules: [
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
                        ]
                    },
                })}
                {RayFormItem({
                    inputProps: {
                        name: "phone",
                    },
                    itemProps: {
                        label: "手机号码"
                    },
                })}
                {RayFormItem({
                    inputProps: {
                        name: "captcha",
                        render: () => (
                            <Input.Group size="large">
                                <Row gutter={8}>
                                    <Col span={16}>
                                        <Input defaultValue="1122" style={{height: 32}}/>
                                    </Col>
                                    <Col span={8}>
                                        <Button>验证码</Button>
                                    </Col>
                                </Row>
                            </Input.Group>
                        )
                    },
                    itemProps: {
                        label: "验证码",
                        extra: '我们必须确保你是人类'
                    },
                })}
                {RayFormItem({
                    inputProps: {
                        name: "code",
                        style: {width: 100}
                    },
                    itemProps: {
                        label: "邀请码",
                        extra: '注册老师才需要填写'
                    },
                })}
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
