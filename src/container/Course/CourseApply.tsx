/*
 * @Author: yyao
 * @Date: 2020-04-26 10:55:19
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-26 11:28:26
 * @Description: 课程报选
 */
import React from "react";
import { Tabs } from "antd";
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
class CourseApply extends React.PureComponent {
  render() {
    return (
      <StickyContainer>
        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
          <TabPane tab="可选课程" key="1" style={{ height: 200 }}>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="已选课程" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </StickyContainer>
    );
  }
}
export default CourseApply;