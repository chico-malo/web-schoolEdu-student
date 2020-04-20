/*
 * @Author: yyao
 * @Date: 2020-04-20 11:09:22
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 12:08:45
 * @Description: 404页
 */
import React from "react";
import { Result, Button } from "antd";
import { routePath } from "~core/route.config";
import { Control } from "react-keeper";

export default class Result404 extends React.Component {
  onGotoHome = () => {
    Control.go(routePath.login);
  };
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={this.onGotoHome}>
            回到首页
          </Button>
        }
      />
    );
  }
}
