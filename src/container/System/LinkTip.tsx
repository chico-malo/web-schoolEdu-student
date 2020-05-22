/*
 * @Author: yyao
 * @Date: 2020-04-30 17:29:53
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:59:41
 * @Description: 登录-注册-重置模块-跳转小工具
 */
import React from "react";
import { Row } from "antd";
import objectPath from "object-path";
import { Link } from "react-keeper";
import { lang } from "~/locales/zh-en";
import { routePath } from "~/core/route/route.path";

export enum TypeProps {
    register,
    login,
    forgot,
}

export interface LinkTipProps {
    leftType: TypeProps;
    rightType: TypeProps;
}

export const LinkTip = ({leftType, rightType}: LinkTipProps) => {
    let defaultValus = {
        [TypeProps.register]: {
            path: routePath.register,
            title: lang.login.register,
        },
        [TypeProps.forgot]: {
            path: routePath.forgot,
            title: lang.login.forgot,
        },
        [TypeProps.login]: {
            path: routePath.login,
            title: lang.login.sign,
        },
    };
    const leftPath = objectPath.get(defaultValus, `${leftType}.path`);
    const leftTitle = objectPath.get(defaultValus, `${leftType}.title`);
    const rightPath = objectPath.get(defaultValus, `${rightType}.path`);
    const rightTitle = objectPath.get(defaultValus, `${rightType}.title`);
    return (
        <Row justify="space-between">
            <Link className="login-form-forgot" to={leftPath}>
                <span>{leftTitle}</span>
            </Link>
            <Link className="login-form-forgot" to={rightPath}>
                <span>{rightTitle}</span>
            </Link>
        </Row>
    );
};
