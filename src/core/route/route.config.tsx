import { routePath } from "./route.path";
import Login from "~/container/System/Login";
import Home from "~/container/Home";
import UserCenter from "~/container/User/UserCenter";
import CourseApply from "~/container/Course/CourseApply";
import Register from "~/container/System/Register";
import Forgot from "~/container/System/Forgot";
import CourseManage from '~/container/Course/CourseManage';
import TeachManage from '~/container/Teach/TeachManage';
import { lang } from '~/locales/zh-en';

/*
 * @Author: yyao
 * @Date: 2020-04-13 18:12:40
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 17:28:33
 * @Description: 路由配置
 */
export interface RouteConfigProps {
    path: string; // 路由
    title: string; // 网站title
    component?: any; // 容器
    loadComponent?: any;
    children?: Array<RouteConfigProps>;
    isMenu?: boolean; // 是否是菜单的路由
}

// 路由配置表
export const routeConfig: Array<RouteConfigProps> = [
    {
        path: "/",
        title: "登录",
        component: Login,
    },
    {
        path: routePath.login,
        title: "登录",
        component: Login,
    },
    {
        path: routePath.register,
        title: "注册",
        component: Register,
    },
    {
        path: routePath.forgot,
        title: "重置密码",
        component: Forgot,
    },
    {
        path: routePath.home,
        title: "首页",
        component: Home,
    },
    {
        path: routePath.courseApply,
        title: "课程中心",
        component: CourseApply,
    }, {
        path: routePath.course,
        title: lang.menu.course,
        component: CourseManage,
    }, {
        path: routePath.teach,
        title: lang.menu.teach,
        component: TeachManage,
    },
    {
        path: routePath.userCenter,
        title: "个人中心",
        component: UserCenter,
    },
];
