/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-28
 * 新增编辑表单
 */
import * as React from 'react';
import { Button, Form, Row } from 'antd';
import { lang } from '~/locales/zh-en';
import { FormInstance } from 'antd/es/form';
import { genderOption } from '~/constants/select.option.gender';
import { RayFormItem } from '~/component/Form';

export default class UserUpdateForm extends React.PureComponent <any, any> {
    formRef = React.createRef<FormInstance>();

    onSubmit = (values) => {
        console.log("Received values of form: ", values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    }

    _renderFormItem = (fields) => {
        return fields.map((item, index) => {
            const {itemProps, ...other} = item;
            const itemStyle = {
                width: '30%',
                marginLeft: 10
            };
            return RayFormItem({
                itemProps: {
                    style: itemStyle,
                    ...itemProps
                },
                ...other
            });
        });
    }

    render() {
        const {processing, fields} = this.props;
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
                    {this._renderFormItem(fields)}
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
