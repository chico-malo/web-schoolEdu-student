import { routePath } from "./route.path";
import Login from "~/container/Login";
import Home from "~/container/Home";
import UserCenter from "~/container/User/UserCenter";
import CourseApply from "~/container/Course/CourseApply";

/*
 * @Author: yyao
 * @Date: 2020-04-13 18:12:40
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-26 11:25:31
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
    path: routePath.login,
    title: "登录",
    component: Login,
  },
  {
    path: routePath.register,
    title: "注册",
    component: Login,
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
  },
  {
    path: routePath.userCenter,
    title: "个人中心",
    component: UserCenter,
  },
];
