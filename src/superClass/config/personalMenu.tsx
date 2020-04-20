/*
 * @Author: yyao
 * @Date: 2020-04-20 14:59:35
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 15:01:09
 * @Description: 文件描述
 */
import React from "react";
import { Menu } from "antd";

export const personalMenu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        个人信息
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        修改密码
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出
      </a>
    </Menu.Item>
  </Menu>
);
