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
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { SystemContainer } from "~/superClass/SystemContainer";
import { Link } from "react-keeper";
import { lang } from "~/locales/zh-en";
import { routePath } from "~/core/route/route.path";
import { EduFormItem } from "~/component/eduFormItem";
import { TypeProps, LinkTip } from "./LinkTip";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const ForgotForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [setAutoCompleteResult] = useState([]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      className="register_form"
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <h1>学籍管理系统-重置密码</h1>
      {EduFormItem({
        itemProps: {
          name: "name",
          label: (
            <span>
              姓名&nbsp;
              <Tooltip title="你希望别人怎么称呼你?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          ),
        },
        title: "姓名",
      })}
      <Form.Item
        name="phone"
        label="手机号码"
        rules={[{ required: true, message: "请输入你的电话号码!" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="验证码" extra="我们必须确保你是人类">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: "请输入你的验证码!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>验证码</Button>
          </Col>
        </Row>
      </Form.Item>
      <LinkTip leftType={TypeProps.login} rightType={TypeProps.register} />
      <Button type="primary" htmlType="submit" className="form_button">
        注册
      </Button>
    </Form>
  );
};
@SystemContainer()
export default class extends React.Component {
  render() {
    return <ForgotForm />;
  }
}
