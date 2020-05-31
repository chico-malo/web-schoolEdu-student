/*
 * @Author: yyao
 * @Date: 2020-04-20 15:19:10
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 14:41:51
 * @Description: 基本样式 高阶组件
 */
import React from "react";
import { UserOutlined, } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Layout, Row } from "antd";
import { Control } from "react-keeper";
import objectPath from 'object-path';

import { lang } from "~/locales/zh-en";
import { personalMenuConfig } from "./config/personalMenu";
import { headerMenu } from "./config/headerMenu";
import { RenderMenu } from '~/superClass/BaseContainer/RenderMenu';
import { teachMenu } from '~/superClass/BaseContainer/config/teachMenu';
import { observer } from 'mobx-react';
import Sider from 'antd/lib/layout/Sider';
import { UserService } from '~/services/User';

const {Header, Content, Footer} = Layout;

export interface BaseContainerProps {
    isHeader?: boolean;
    isFooter?: Boolean;
}

export const BaseContainer = (BaseContainerProps: BaseContainerProps) => (
    WrappedComponent
) => observer(
    class extends React.PureComponent<BaseContainerProps, any> {
        constructor(props) {
            super(props);
            const pathname: string = (this.props as any).pathname;
            this.state = {
                statePath: pathname || "/home",
                collapsed: false,
            };
        }

        /**
         * @description: 菜单点击
         * @param {type} path: 跳转path
         * @return:null
         */
        onMenuLick = (path: string) => {
            Control.go(path);
        };

        // 老师端菜单形态转换开关
        onTeachCollapse = collapsed => {
            this.setState({collapsed});
        };

        // 头部
        _renderHeader = () => {
            const {statePath} = this.state;
            const {userInfo} = UserService;
            const name = objectPath.get(userInfo, 'username') || 'xxx';
            return (
                <Header className="home_header">
                    <Row className="header_left">
                        <div className="left_logo">学籍管理系统</div>
                        <RenderMenu config={headerMenu} onMenuLick={this.onMenuLick}
                                    props={{theme: 'dark', mode: 'horizontal', defaultSelectedKeys: [statePath]}}/>
                    </Row>
                    <Row className="header_right" align="middle" justify="end">
                        <Dropdown overlay={<RenderMenu config={personalMenuConfig} onMenuLick={this.onMenuLick}/>}>
                            <Row align="middle">
                                <Badge count={1}>
                                    <Avatar shape="square" icon={<UserOutlined/>}/>
                                </Badge>
                                <span className="header_right_name">{name}</span>
                            </Row>
                        </Dropdown>
                    </Row>
                </Header>
            );
        };
        // 老师身份菜单
        _renderTeachMenu = () => {
            const {collapsed, statePath} = this.state;
            return (
                <Sider collapsible collapsed={collapsed} onCollapse={this.onTeachCollapse} className="home_teach_box">
                    <RenderMenu config={teachMenu} onMenuLick={this.onMenuLick}
                                props={{theme: 'dark', mode: 'inline', defaultSelectedKeys: [statePath]}}/>
                </Sider>
            )
        };
        // 内容
        _renderContent = () => {
            const marginLeft = this.state.collapsed ? 50 : 180;
            return (
                <Content className="home_content" style={{marginLeft}}>
                    <WrappedComponent {...this.props} />
                </Content>
            );
        };
        // 页脚
        _renderFooter = () => {
            return <Footer style={{textAlign: "center"}}>{lang.CopyRight}</Footer>;
        };

        render() {
            const {isHeader = true, isFooter = true} = BaseContainerProps;
            const {userInfo} = UserService;
            const name = objectPath.get(userInfo, 'role');
            return (
                <Layout className="container_home">
                    {name === '2' || name === '3' && this._renderTeachMenu()}
                    <Layout className="home_content_box">
                        {isHeader && this._renderHeader()}
                        {this._renderContent()}
                        {isFooter && this._renderFooter()}
                    </Layout>
                </Layout>
            );
        }
    });
