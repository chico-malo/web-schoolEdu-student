/*
 * @Author: yyao
 * @Date: 2020-04-13 15:40:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 17:01:30
 * @Description: 入口文件
 */
import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";
import "babel-polyfill";
import "normalize.css";
import "antd/dist/antd.css";
import "./styles/theme.less";
import "./styles/index.less";

import React from "react";
import ReactDOM from "react-dom";
import GenerateRoute from "~core/route/GenerateRoute";

const application = document.getElementById("application");

ReactDOM.render(<GenerateRoute />, application);
