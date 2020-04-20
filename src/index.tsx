/*
 * @Author: yyao
 * @Date: 2020-04-13 15:40:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-13 18:24:50
 * @Description: 入口文件
 */
import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";
import "babel-polyfill";
import "normalize.css";
import "antd/dist/antd.css";
import "./styles/theme.less";

import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-keeper";
import Login from "./container/Login";
import { RouteConfigProps, routeConfig } from "./core/route.config";
import { BackTop } from "antd";

const application = document.getElementById("application");

class App extends React.Component {
  /**
   * @description: 生成路由
   * @param {type} config:配置
   * @return: React.node
   */
  generateRouteItem = (config) => {
    return config.map((item: RouteConfigProps, index) => {
      const { component, path } = item;
      return <Route component={component} path={path} key={index} />;
    });
  };
  render() {
    return (
      <HashRouter>
        <div className="application_container">
          <BackTop />
          {/* <Route component={Home} path={menuRouteInfo.home.path} index cache /> */}
          {this.generateRouteItem(routeConfig)}
          <Route miss component={Login} cache />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, application);
