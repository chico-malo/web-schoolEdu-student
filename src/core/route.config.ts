import Login from "../container/Login";

/*
 * @Author: yyao
 * @Date: 2020-04-13 18:12:40
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-13 18:45:43
 * @Description: 路由配置
 */
export interface RouteConfigProps {
  path: string; // 路由
  title: string; // 网站title
  component?: any; // 容器
  children?: Array<RouteConfigProps>;
  isMenu?: boolean; // 是否是菜单的路由
}

// 路由表
export const routePath = {
  login: '/',
  register: '/s'
}

// 路由配置表
export const routeConfig: Array<RouteConfigProps> = [
  {
    path: routePath.login,
    title: "登录",
    component: Login,
  },
]
