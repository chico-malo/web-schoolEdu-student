/*
 * @Author: yyao
 * @Date: 2020-04-13 15:40:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-13 16:36:06
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
import Login from "./container/Login";

const application = document.getElementById("application");

class App extends React.Component {
  render() {
    return (
      <div className="application_container">
        <Login />
      </div>
    );
  }
}

ReactDOM.render(<App />, application);
