/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 */
import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { lang } from '~/locales/zh-en';
import { RayFormItem } from '~/component/Form';

// 搜索表单
export const SearchForm = ({fields}) => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();

    const getFields = () => {
        const fieldLength = fields.length;
        const count = expand ? fieldLength : fieldLength / 2;
        const children = [];
        for (let i = 0; i < count; i++) {
            const config = {required: false, ...fields[i]};
            children.push(
                <Col span={8} key={i}>
                    {RayFormItem(config)}
                </Col>,
            );
        }
        return children;
    };

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <Card>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>{getFields()}</Row>
                <Row>
                    <Col span={24} style={{textAlign: 'right'}}>
                        <Button type="primary" htmlType="submit">
                            {lang.search}
                        </Button>
                        <Button
                            style={{margin: '0 8px'}}
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            {lang.reset}
                        </Button>
                        <a
                            style={{fontSize: 12}}
                            onClick={() => {
                                setExpand(!expand);
                            }}
                        >
                            {expand ? <UpOutlined/> : <DownOutlined/>} 展开
                        </a>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
};
