/*
 * @Author: yyao
 * @Date: 2020-04-13 15:40:34
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 17:25:17
 * @Description: 入口文件
 */
import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";
import "babel-polyfill";
import 'mobx-react-lite/batchingForReactDom';
import "normalize.css";
import "antd/dist/antd.css";
import "./styles/theme.less";
import "./styles/index.less";

import React from "react";
import ReactDOM from "react-dom";
import GenerateRoute from "~/core/route/GenerateRoute";
import { globalService } from "./services/Global";

const application = document.getElementById("application");

function App() {
    globalService.query();
    return <GenerateRoute/>;
}

ReactDOM.render(App(), application);
