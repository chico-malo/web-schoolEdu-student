/*
 * @Author: yyao
 * @Date: 2020-04-26 14:03:32
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-26 14:04:25
 * @Description: 文件描述
 */

import { routePath } from "~/core/route/route.path";

// 右侧个人菜单
export const personalMenuConfig = [
    {
        title: "个人信息",
        path: routePath.userCenter,
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