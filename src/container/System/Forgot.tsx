/*
 * @Author: yyao
 * @Date: 2020-04-30 14:47:44
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 18:00:46
 * @Description: 用户-重置密码
 */
import React, { useState } from "react";
import { Button, Form, } from "antd";
import { SystemContainer } from "~/superClass/SystemContainer";
import { LinkTip, TypeProps } from "./LinkTip";
import { SystemService } from '~/services/System';
import { formUsername } from '~/constants/formConfig/form.username';
import { formPhone } from '~/constants/formConfig/form.phone';
import { formCaptcha } from '~/constants/formConfig/form.captcha';
import { lang } from '~/locales/zh-en';

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

const ForgotForm = ({onFinish}) => {
    const [form] = Form.useForm();

    const [setAutoCompleteResult] = useState([]);

    return (
        <Form
            {...formItemLayout}
            form={form}
            className="register_form"
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            initialValues={{captcha: '1122'}}
        >
            <h1 className="form_title">学籍管理系统-重置密码</h1>
            <div className="form_content">
                {formUsername}
                {formPhone}
                {formCaptcha}
            </div>
            <LinkTip leftType={TypeProps.login} rightType={TypeProps.register}/>
            <Button type="primary" htmlType="submit" className="form_button">
                {lang.submit}
            </Button>
        </Form>
    );
};

@SystemContainer()
export default class extends React.Component {
    onSubmit = (values) => {
        console.log(values);
        SystemService.forget(values);
    };

    render() {
        return <ForgotForm onFinish={this.onSubmit}/>;
    }
}
