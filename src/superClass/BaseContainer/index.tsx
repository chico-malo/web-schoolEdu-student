/*
 * @Author: yyao
 * @Date: 2020-04-20 15:19:10
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 16:05:47
 * @Description: 基本样式 高阶组件
 */
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb, Row, Badge, Avatar, Dropdown } from "antd";
import { personalMenu } from "../config/personalMenu";
import { lang } from "~locales/zh-en";

const { Header, Content, Footer } = Layout;

export interface BaseContainerProps {
  isHeader?: boolean;
  isFooter?: Boolean;
}

export const BaseContainer = (BaseContainerProps: BaseContainerProps) => (
  WrappedComponent
) =>
  class extends React.Component<BaseContainerProps, any> {
    _renderHeader = () => {
      return (
        <Header className="home_header">
          <Row className="header_left">
            <div className="left_logo">学籍管理系统-毕业设计</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">课程报选</Menu.Item>
              <Menu.Item key="3">个人中心</Menu.Item>
            </Menu>
          </Row>
          <Row className="header_right" align="middle" justify="end">
            <Dropdown overlay={personalMenu}>
              <Row align="middle">
                <Badge count={1}>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
                <span className="header_right_name">xxxx</span>
              </Row>
            </Dropdown>
          </Row>
        </Header>
      );
    };
    _renderContent = () => {
      return (
        <Content className="home_content">
          <WrappedComponent {...this.props} />
        </Content>
      );
    };
    _renderFooter = () => {
      return <Footer style={{ textAlign: "center" }}>{lang.CopyRight}</Footer>;
    };
    render() {
      const { isHeader = true, isFooter = true } = BaseContainerProps;
      return (
        <Layout className="container_home">
          {isHeader && this._renderHeader()}
          {this._renderContent()}
          {isFooter && this._renderFooter()}
        </Layout>
      );
    }
  };
