/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 */
import * as React from 'react';
import { Button, Form, Row } from 'antd';
import { lang } from '~/locales/zh-en';
import { FormInstance } from 'antd/es/form';
import { genderOption } from '~/constants/select.option.gender';
import { RayFormItem } from '~/component/Form';

export default class UserUpdateForm extends React.Component<any, any> {
    formRef = React.createRef<FormInstance>();

    onSubmit = (values) => {
        console.log("Received values of form: ", values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    }

    render() {
        const {processing} = this.props;
        const itemStyle = {
            width: '30%',
            marginLeft: 10
        };
        const layout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        }
        return (
            <Form {...layout}
                  name="normal_login"
                  className="userCenter_form"
                  initialValues={{remember: false}}
                  onFinish={this.onSubmit}
                  ref={this.formRef}
            >
                <Row className="form_content">
                    {RayFormItem({
                        itemProps: {
                            label: lang.username,
                            name: "name",
                            style: itemStyle
                        },
                        inputProps: {},
                    })}
                    {RayFormItem({
                        itemProps: {
                            label: lang.gender,
                            name: "gender",
                            style: itemStyle
                        },
                        renderType: 'select',
                        inputProps: {
                            options: genderOption
                        },
                    })}
                    {RayFormItem({
                        itemProps: {
                            name: 'createAT',
                            label: lang.createAT,
                            style: itemStyle
                        },
                        inputProps: {},
                    })}
                    {RayFormItem({
                        itemProps: {
                            name: "age",
                            label: lang.age,
                            style: itemStyle
                        },
                        inputProps: {},
                    })}
                    {RayFormItem({
                        itemProps: {
                            name: "phone",
                            label: lang.phone,
                            style: itemStyle
                        },
                        inputProps: {},
                    })}
                    {RayFormItem({
                        itemProps: {
                            name: "email",
                            label: lang.email,
                            style: itemStyle
                        },
                        inputProps: {},
                    })}
                    {RayFormItem({
                        itemProps: {
                            name: "class",
                            label: lang.class,
                            style: itemStyle
                        },
                        inputProps: {},
                    })}
                </Row>
                <Row justify="center">
                    <Button loading={processing} onClick={this.onReset} className="form_btn">
                        {lang.reset}
                    </Button>
                    <Button type="primary" htmlType="submit" loading={processing} className="form_btn">
                        {lang.submit}
                    </Button>
                </Row>
            </Form>
        )
    }
}

