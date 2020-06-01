/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-01
 */
import * as React from "react";
import { RayFormItem } from '~/component/Form';
import { Button, Col, Input, Row } from 'antd';
import { lang } from '~/locales/zh-en';

export const formCaptcha = RayFormItem({
    render: () => (
        <Input.Group size="large">
            <Row gutter={8}>
                <Col span={16}>
                    <Input defaultValue="1122" name="captcha" style={{height: 32}}/>
                </Col>
                <Col span={8}>
                    <Button>验证码</Button>
                </Col>
            </Row>
        </Input.Group>
    ),
    itemProps: {
        label: lang.captcha,
        extra: '我们必须确保你是人类'
    },
});
