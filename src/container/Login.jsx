import { Form, Input, Button, Checkbox, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { lang } from "../locales/zh-en";

export default class Login extends React.PureComponent {
  /**
   * @description: 提交事件
   * @param {type} null
   * @return: null
   */

  onSubmit = (values) => {
    console.log("Received values of form: ", values);
  };

  render() {
    return (
      <Row justify="center" align="middle" className="container_login">
        <Form
          name="normal_login"
          className="login_form"
          initialValues={{ remember: true }}
          onFinish={this.onSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Row justify="space-between">
              <a className="login-form-forgot" href="">
                {lang.login.forgot}
              </a>
              <a className="login-form-forgot" href="">
                {lang.login.register}
              </a>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {lang.login.sign}
            </Button>
          </Form.Item>
        </Form>
      </Row>
    );
  }
}
