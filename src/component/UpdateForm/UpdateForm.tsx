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
import { RayFormItem } from '~/component/Form';

export default class UpdateForm extends React.PureComponent <any, any> {
    formRef = React.createRef<FormInstance>();

    onSubmit = (values) => {
        console.log("Received values of form: ", values);
        const {onSubmit} = this.props;
        onSubmit && onSubmit(values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
        const {onReset} = this.props;
        onReset && onReset();
    };

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
                key: index,
                ...other
            });
        });
    };

    render() {
        const {processing, fields, initialValues} = this.props;
        const layout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16},
        }
        return (
            <Form {...layout}
                  name="normal_login"
                  className="userCenter_form"
                  initialValues={initialValues}
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
