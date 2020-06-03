/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-02
 * 动态表单
 */
import * as  React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export const DynamicForm: React.FC = () => {
    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    return (
        <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
