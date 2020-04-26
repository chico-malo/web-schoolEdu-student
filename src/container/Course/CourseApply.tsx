/*
 * @Author: yyao
 * @Date: 2020-04-26 10:55:19
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-26 12:09:20
 * @Description: 课程报选
 */
import React from "react";
import { List, Avatar, Tabs } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
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
        title: `ant design part ${i}`,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        content:
          "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
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
          pageSize: 3,
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
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
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
      <StickyContainer>
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane tab="可选课程" key="1" style={{ height: 200 }}>
            {this._renderList()}
          </TabPane>
          <TabPane tab="已选课程" key="2">
            {this._renderList()}
          </TabPane>
        </Tabs>
      </StickyContainer>
    );
  }
}
export default CourseApply;
