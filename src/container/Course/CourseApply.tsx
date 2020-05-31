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
import { CourseService } from '~/services/Course';
import { observer } from 'mobx-react';
import BaseClass from '~/superClass/BaseClass';

const {TabPane} = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({style}) => (
            <DefaultTabBar
                {...props}
                className="site-custom-tab-bar"
                style={{...style}}
            />
        )}
    </Sticky>
);

@BaseContainer({})
@observer
class CourseApply extends BaseClass<any> {
    _renderList = (data) => {
        const IconText = ({icon, text}) => (
            <span>
        {React.createElement(icon, {style: {marginRight: 8}})}
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
                dataSource={data}
                footer={
                    <div>
                        <b>你还可以报7门课程</b>
                    </div>
                }
                renderItem={(item, index) => (
                    <List.Item
                        key={index}
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
                                text={item.total}
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
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                            title={<span>{item.name}</span>}
                            description={item.descr}
                        />
                    </List.Item>
                )}
            />
        );
    };

    render() {
        const data = this.getUserInfo('grade.courses') || [];
        return (
            <StickyContainer className="container_courseApply">
                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <TabPane tab="本期课程" key="1" className="courseApply_tabPane">
                        {this._renderList(data)}
                    </TabPane>
                </Tabs>
            </StickyContainer>
        );
    }
}

export default CourseApply;
