/*
 * @Author: yyao
 * @Date: 2020-04-20 15:19:10
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 17:05:21
 * @Description: 基本样式 高阶组件
 */
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb, Row, Badge, Avatar, Dropdown } from "antd";
import { Control } from "react-keeper";
import { lang } from "~locales/zh-en";
import { routePath } from "~core/route/route.path";

const { Header, Content, Footer } = Layout;

export interface BaseContainerProps {
  isHeader?: boolean;
  isFooter?: Boolean;
}
// 头部菜单
const headerMenu = [
  {
    title: "首页",
    path: routePath.home,
  },
  {
    title: "课程报选",
    path: "",
  },
  {
    title: "个人中心",
    path: "",
  },
];
// 右侧个人菜单
const personalMenuConfig = [
  {
    title: "个人信息",
    path: "",
  },
  {
    title: "修改密码",
    path: "",
  },
  {
    title: "退出",
    path: routePath.login,
  },
];

export const BaseContainer = (BaseContainerProps: BaseContainerProps) => (
  WrappedComponent
) =>
  class extends React.Component<BaseContainerProps, any> {
    /**
     * @description: 菜单点击
     * @param {type} path: 跳转path
     * @return:null
     */
    onMenuLick = (path: string) => {
      Control.go(path);
    };
    // 头部
    _renderHeader = () => {
      const generateMenu = (
        <Menu>
          {personalMenuConfig.map(({ path, title }, index) => (
            <Menu.Item key={index} onClick={() => this.onMenuLick(path)}>
              {title}
            </Menu.Item>
          ))}
        </Menu>
      );

      return (
        <Header className="home_header">
          <Row className="header_left">
            <div className="left_logo">学籍管理系统-毕业设计</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
              {headerMenu.map(({ title, path }, index) => (
                <Menu.Item key={index} onClick={() => this.onMenuLick(path)}>
                  {title}
                </Menu.Item>
              ))}
            </Menu>
          </Row>
          <Row className="header_right" align="middle" justify="end">
            <Dropdown overlay={generateMenu}>
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
    // 内容
    _renderContent = () => {
      return (
        <Content className="home_content">
          <WrappedComponent {...this.props} />
        </Content>
      );
    };
    // 页脚
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
