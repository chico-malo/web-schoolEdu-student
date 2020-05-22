/*
 * @Author: yyao
 * @Date: 2020-04-30 14:59:00
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 15:06:19
 * @Description: 登录-注册-忘记密码部分的 高阶函数
 */
import "~/styles/system.less";
import React from "react";
import { Row } from "antd";
import { lang } from "~/locales/zh-en";

export interface SystemContainerProps {
}

export const SystemContainer = (SystemContainerProps: SystemContainerProps) => (
    WrappedComponent
) =>
    class extends React.PureComponent<SystemContainerProps, any> {
        render() {
            return (
                <Row justify="center" align="middle" className="container_system">
                    <WrappedComponent {...this.props} />
                    <Row align="middle" className="system_foot">
                        <span className="foot_copyRight">{lang.CopyRight}</span>
                    </Row>
                </Row>
            );
        }
    };
