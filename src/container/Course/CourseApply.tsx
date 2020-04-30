/*
 * @Author: yyao
 * @Date: 2020-04-26 10:55:19
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-30 14:30:24
 * @Description: 课程报选
 */
import "~/styles/courseApply.less";
import React from "react";
import { List, Avatar, Tabs } from "antd";
import { UsergroupAddOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { StickyContainer, Sticky } from "react-sticky";
import { BaseContainer } from "~/superClass/BaseContainer";

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className="site-custom-tab-bar"
        style={{ ...style }}
      />
    )}
  </Sticky>
);

@BaseContainer({})
class CourseApply extends React.PureComponent<any, any> {
  _renderList = () => {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: "http://ant.design",
        title: `课程列表${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description: "这里是对老师的基本介绍",
        content: "这一段是对课程的基本介绍",
      });
    }

    const IconText = ({ icon, text }) => (
      <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
      </span>
    );

    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
            actions={[
              <IconText
                icon={UsergroupAddOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={PlusSquareOutlined}
                text="报课申请"
                key="PlusSquareOutlined"
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  };
  render() {
    return (
      <StickyContainer className="container_courseApply">
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane tab="可选课程" key="1" className="courseApply_tabPane">
            {this._renderList()}
          </TabPane>
          <TabPane tab="已选课程" key="2" className="courseApply_tabPane">
            {this._renderList()}
          </TabPane>
        </Tabs>
      </StickyContainer>
    );
  }
}
export default CourseApply;
