/*
 * @Author: yyao
 * @Date: 2020-04-30 14:47:44
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 18:01:01
 * @Description: 用户-注册新用户
 */
import React, { useState } from "react";
import { observer } from 'mobx-react';
import { Button, Form, } from "antd";

import { SystemContainer } from "~/superClass/SystemContainer";
import { LinkTip, TypeProps } from "./LinkTip";
import { SystemService } from '~/services/System';
import { lang } from '~/locales/zh-en';
import { RayFormItem } from "~/component/Form";
import { formUsername } from "~/constants/formConfig/form.username";
import { formPhone } from '~/constants/formConfig/form.phone';
import { formCaptcha } from "~/constants/formConfig/form.captcha";

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 7},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 15},
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
                {formUsername}
                {RayFormItem({
                    renderType: 'password',
                    itemProps: {
                        label: lang.password,
                        name: "password",
                        hasFeedback: true,
                    },
                })}
                {RayFormItem({
                    renderType: 'password',
                    itemProps: {
                        label: lang.confirmPassword,
                        name: "confirm",
                        dependencies: ["password"],
                        hasFeedback: true,
                        rules: [
                            {
                                required: true,
                                message: "请确认您的密码!",
                            },
                            ({getFieldValue}) => ({
                                validator(rule, value) {
                                    const password = getFieldValue("password");
                                    if (!value || password === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("您输入的两个密码不匹配!");
                                },
                            }),
                        ]
                    },
                })}
                {formPhone}
                {formCaptcha}
                {RayFormItem({
                    inputProps: {
                        style: {width: 100}
                    },
                    itemProps: {
                        name: "code",
                        label: "邀请码",
                        extra: '注册老师才需要填写'
                    },
                    required: false
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
