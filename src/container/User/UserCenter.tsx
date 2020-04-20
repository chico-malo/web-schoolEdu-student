/*
 * @Author: yyao
 * @Date: 2020-04-20 17:06:48
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 18:16:25
 * @Description: 个人中心
 */
import React from "react";
import { Skeleton, Switch, Card, Avatar, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
import { BaseContainer } from "~/superClass/BaseContainer";

@BaseContainer({})
export default class UserCenter extends React.Component<any, any> {
  state = {
    loading: true,
  };

  onChange = (checked) => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;
    const config = [];
    for (let i = 0; i < 40; i++) {
      config.push({});
    }
    return (
      <div className="container_userCenter">
        <Switch checked={!loading} onChange={this.onChange} />
        <Card title="个人信息" className="userCenter_card" loading={loading}>
          <Row>
            <Card
              className="card_left_info"
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="xxxx姓名"
                description="xxxxx班级信息"
              />
            </Card>
            <Row className="card_right_info" gutter={5}>
              {config.map((item, index) => (
                <Row key={index} style={{ width: 120 }}>
                  <span>姓名: xxx</span>
                </Row>
              ))}
            </Row>
          </Row>
        </Card>
      </div>
    );
  }
}
