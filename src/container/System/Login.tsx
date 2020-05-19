import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { observer } from 'mobx-react';

import { SystemContainer } from "~/superClass/SystemContainer";
import { LinkTip, TypeProps } from "./LinkTip";
import { lang } from '~/locales/zh-en';
import { SystemService } from '~/services/System';

@SystemContainer()
@observer
export default class Login extends React.PureComponent {
    /**
     * @description: 提交事件
     * @param {type} null
     * @return: null
     */
    onSubmit = (values) => {
        console.log("Received values of form: ", values);
        SystemService.login(values);
    };
    _renderFormItem = (config) => {
        const {name, message, itemProps, inputProps} = config;
        return (
            <Form.Item
                name={name}
                rules={[{required: true, message}]}
                {...itemProps}
            >
                <Input {...inputProps} />
            </Form.Item>
        );
    };

    render() {
        return (
            <Form
                name="normal_login"
                className="login_form"
                initialValues={{remember: false}}
                onFinish={this.onSubmit}
            >
                {/*<h1>学籍管理系统-登录</h1>*/}
                {this._renderFormItem({
                    name: "username",
                    message: "请输入姓名!",
                    inputProps: {
                        placeholder: "姓名",
                        prefix: <UserOutlined className="site-form-item-icon"/>,
                    },
                })}
                {this._renderFormItem({
                    name: "password",
                    message: "请输入密码!",
                    inputProps: {
                        placeholder: "密码",
                        type: "password",
                        prefix: <LockOutlined className="site-form-item-icon"/>,
                    },
                })}
                <LinkTip leftType={TypeProps.forgot} rightType={TypeProps.register}/>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="form_button">
                        {lang.login.sign}
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
