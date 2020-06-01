import { Button, Form } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { observer } from 'mobx-react';

import { SystemContainer } from "~/superClass/SystemContainer";
import { LinkTip, TypeProps } from "./LinkTip";
import { lang } from '~/locales/zh-en';
import { SystemService } from '~/services/System';
import { RayFormItem } from '~/component/Form';

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

    render() {
        const {processing} = SystemService;
        return (
            <Form
                name="normal_login"
                className="login_form"
                initialValues={{remember: false}}
                onFinish={this.onSubmit}
            >
                <h1 className="form_title">学籍管理系统-登录</h1>
                <div className="form_content">
                    {
                        RayFormItem({
                            inputProps: {
                                name: "username",
                                placeholder: '用户名',
                                prefix: <UserOutlined className="site-form-item-icon"/>,
                            },
                        })
                    }
                    {
                        RayFormItem({
                            inputProps: {
                                name: "password",
                                type: "password",
                                placeholder: '密码',
                                prefix: <LockOutlined className="site-form-item-icon"/>,
                            },
                        })
                    }
                </div>
                <LinkTip leftType={TypeProps.forgot} rightType={TypeProps.register}/>
                <Button type="primary" htmlType="submit" className="form_button" loading={processing}>
                    {lang.login.sign}
                </Button>
            </Form>
        );
    }
}
