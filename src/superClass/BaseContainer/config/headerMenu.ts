/*
 * @Author: yyao
 * @Date: 2020-04-26 14:03:19
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-26 14:04:15
 * @Description: 文件描述
 */

import { routePath } from "~/core/route/route.path";

// 头部菜单
export const headerMenu = [
    {
        title: "首页",
        path: routePath.home,
    },
    {
        title: "课程报选",
        path: routePath.courseApply,
    },
    {
        title: "个人中心",
        path: routePath.userCenter,
    },
];