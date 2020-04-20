import { Form, Input, Button, Checkbox, Row } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import React from "react";
import { lang } from "../locales/zh-en";
import { Link } from "react-keeper";
import { routePath } from "../core/route.config";

export default class Login extends React.PureComponent {
  /**
   * @description: 提交事件
   * @param {type} null
   * @return: null
   */

  onSubmit = (values) => {
    console.log("Received values of form: ", values);
  };
  _renderFormItem = ({ name, message, itemProps, inputProps }) => {
    return (
      <Form.Item
        name={name}
        rules={[{ required: true, message }]}
        {...itemProps}
      >
        <Input {...inputProps} />
      </Form.Item>
    );
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
          {this._renderFormItem({
            name: "username",
            message: "请输入姓名!",
            inputProps: {
              placeholder: "姓名",
              prefix: <UserOutlined className="site-form-item-icon" />,
            },
          })}
          {this._renderFormItem({
            name: "password",
            message: "请输入密码!",
            inputProps: {
              placeholder: "密码",
              type: "password",
              prefix: <LockOutlined className="site-form-item-icon" />,
            },
          })}
          {this._renderFormItem({
            name: "email",
            message: "请输入邮箱!",
            inputProps: {
              placeholder: "邮箱",
              prefix: <MailOutlined />,
              type: "email",
            },
          })}
          <Form.Item>
            <Row justify="space-between">
              <Link className="login-form-forgot" to={routePath.register}>
                <span>{lang.login.forgot}</span>
              </Link>
              <Link className="login-form-forgot" to={routePath.register}>
                <span>{lang.login.register}</span>
              </Link>
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
