import React from "react";
import { RouteConfigProps, routeConfig } from "./route.config";
import { Route, HashRouter } from "react-keeper";
import { BackTop } from "antd";
import Result404 from "~/container/result/404";

export default class GenerateRoute extends React.Component {
  // 设置文档title
  setDocumentTitle = (cb, props, title) => {
    document.title = `${title}-学籍管理系统-毕业设计`;
    cb();
  };

  /**
   * @description: 生成路由
   * @param {type} config:配置
   * @return: React.node
   */
  generateRouteItem = (config) => {
    return config.map((item: RouteConfigProps, index) => {
      const { component, path, title } = item;
      return (
        <Route
          component={component}
          path={path}
          key={index}
          enterFilter={[(cb, props) => this.setDocumentTitle(cb, props, title)]}
        />
      );
    });
  };
  render() {
    console.log('index');
    return (
      <HashRouter>
        <div className="application_container">
          <BackTop />
          {this.generateRouteItem(routeConfig)}
          <Route miss component={Result404} cache />
        </div>
      </HashRouter>
    );
  }
}
