/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 */
import * as React from 'react';
import { Button, Form } from 'antd';
import { lang } from '~/locales/zh-en';
import { EduFormItem } from '~/component/eduFormItem';
import { SystemService } from '~/services/System';
import { UserOutlined } from "@ant-design/icons";
import { RayFormItem } from 'ray-web-common/lib/component/Form/RayFormItem';

export default class UserUpdateForm extends React.Component<any, any> {
    onSubmit = (values) => {
        console.log("Received values of form: ", values);
        SystemService.login(values);
    };

    render() {
        const {processing} = this.props;
        return (
            <Form
                name="normal_login"
                className="login_form"
                initialValues={{remember: false}}
                onFinish={this.onSubmit}
            >
                <div className="form_content">
                    {RayFormItem({
                        itemProps: {
                            label: '姓名',
                            name: "username",
                        },
                        inputProps: {
                            prefix: <UserOutlined className="site-form-item-icon"/>,
                        },
                    })}
                    {RayFormItem({
                        itemProps: {
                            label: '性别',
                            name: "username",
                        },
                        renderType: 'select',
                        inputProps: {
                            prefix: <UserOutlined className="site-form-item-icon"/>,
                        },
                    })}
                    {RayFormItem({
                        itemProps: {
                            name: "username",
                            label: '班级',
                        },
                        inputProps: {
                            prefix: <UserOutlined className="site-form-item-icon"/>,
                        },
                    })}
                </div>
                <Button type="primary" htmlType="submit" className="form_button" loading={processing}>
                    {lang.login.sign}
                </Button>
            </Form>
        )
    }
}

