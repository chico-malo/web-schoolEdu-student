/*
 * @Author: yyao
 * @Date: 2020-04-20 17:06:48
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 18:16:25
 * @Description: 个人中心
 */
import "~/styles/userCenter.less";
import React from "react";
import moment from 'moment';
import { Avatar, Card, Descriptions, Row } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined, } from "@ant-design/icons";
import objectPath  from 'object-path';
import { observer } from 'mobx-react';

import { BaseContainer } from "~/superClass/BaseContainer";
import { EduDrawer } from '~/component/EduDrawer';
import UpdateForm from '~/component/UpdateForm/UpdateForm';
import { userUpdateForm } from '~/container/User/config/user.update.form';
import BaseClass from '~/superClass/BaseClass';
import { UserService } from '~/services/User';
import { lang } from '~/locales/zh-en';

const {Meta} = Card;

@BaseContainer({})
@observer
export default class UserCenter extends BaseClass<any> {
    eduDrawer;
    state = {
        loading: false,
        status: false
    };

    onChange = (checked) => {
        this.setState({loading: !checked});
    };
    onEdit = () => {
        this.eduDrawer.onSwitch(true);
    }

    onSubmit = (values) => {
        const _id = this.getUserInfo('_id');
        const {grade, ...other} = values;
        const newValue = {
            _id,
            personal: other,
            grade
        };
        console.log('values', newValue);
        UserService.update(newValue, () => {
            this.eduDrawer.onSwitch(false);
        });
    }

    getInitialValues = () => {
        const personal = this.getUserInfo('personal');
        const grade = this.getUserInfo('grade._id');
        let newRecord = {};
        if (personal) {
            const {birthDay} = personal;
            newRecord = {
                ...personal,
                birthDay: moment(birthDay),
                grade
            }
        }
        return newRecord;
    };
    _renderDescriptionItem = () => {
        const personal = this.getUserInfo('personal') || {};
        return (
            <Descriptions title="基本信息" style={{width: '60%', marginLeft: 20}}>
                {
                    Object.keys(personal).map((key, index) => {
                        const defaultLabel = objectPath.get(lang, key);
                        return <Descriptions.Item key={index} label={defaultLabel}>{personal[key]}</Descriptions.Item>
                    })
                }
            </Descriptions>
        )
    }

    render() {
        const {loading, status} = this.state;
        const config = [];
        for (let i = 0; i < 40; i++) {
            config.push({});
        }
        const name = this.getUserInfo('personal.name') || this.getUserInfo('username');
        const grade = this.getUserInfo('grade.name');
        return (
            <div className="container_userCenter">
                <EduDrawer ref={node => this.eduDrawer = node} title="编辑信息">
                    <UpdateForm fields={userUpdateForm} onSubmit={this.onSubmit}
                                initialValues={this.getInitialValues()}/>
                </EduDrawer>
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
                                <EditOutlined key="edit" onClick={this.onEdit}/>,
                                <SettingOutlined key="setting"/>,
                                <EllipsisOutlined key="ellipsis"/>,
                            ]}
                        >
                            <Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                }
                                title={name}
                                description={grade}
                            />
                        </Card>
                        {this._renderDescriptionItem()}
                    </Row>
                </Card>
            </div>
        );
    }
}
