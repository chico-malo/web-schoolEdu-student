/*
 * @Author: yyao
 * @Date: 2020-04-30 14:47:44
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 18:00:46
 * @Description: 用户-重置密码
 */
import React, { useState } from "react";
import {
    Form,
    Input,
    Tooltip,
    Select,
    Row,
    Col,
    Button,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { SystemContainer } from "~/superClass/SystemContainer";
import { EduFormItem } from "~/component/eduFormItem";
import { TypeProps, LinkTip } from "./LinkTip";
import { SystemService } from '~/services/System';

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
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
        >
            <h1 className="form_title">学籍管理系统-重置密码</h1>
            <div className="form_content">
                {EduFormItem({
                    itemProps: {
                        name: "username",
                        label: (
                            <span>
              姓名&nbsp;
                                <Tooltip title="你希望别人怎么称呼你?">
                <QuestionCircleOutlined/>
              </Tooltip>
            </span>
                        ),
                    },
                    title: "姓名",
                })}
                <Form.Item
                    name="phone"
                    label="手机号码"
                    rules={[{required: true, message: "请输入你的电话号码!"}]}
                    children
                >
                    <Input style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item label="验证码" extra="我们必须确保你是人类" children
                >
                    <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item
                                children
                                name="captcha"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入你的验证码!",
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Button>{"验证码"}</Button>
                        </Col>
                    </Row>
                </Form.Item>
            </div>
            <LinkTip leftType={TypeProps.login} rightType={TypeProps.register}/>
            <Button type="primary" htmlType="submit" className="form_button">
                注册
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
