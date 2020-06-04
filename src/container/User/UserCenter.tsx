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
import { Avatar, Card, Row } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined, } from "@ant-design/icons";
import { observer } from 'mobx-react';

import { BaseContainer } from "~/superClass/BaseContainer";
import { EduDrawer } from '~/component/EduDrawer';
import UpdateForm from '~/component/UpdateForm/UpdateForm';
import { userUpdateForm } from '~/container/User/config/user.update.form';
import BaseClass from '~/superClass/BaseClass';
import { UserService } from '~/services/User';
import { lang } from '~/locales/zh-en';
import { EduDescription } from '~/component/EduDescription';
import { genderMapping } from '~/constants/select.option.gender';

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
        const newValue = {
            _id,
            ...values
        };
        console.log('values', newValue);
        UserService.update(newValue, true, () => {
            this.eduDrawer.onSwitch(false);
        });
    }

    getInitialValues = () => {
        const personal = this.getUserInfo('personal');
        const birthDay = this.getUserInfo('personal.birthDay') || {};
        const grade = this.getUserInfo('grade._id');
        let newPersonal = personal;
        if (birthDay) {
            newPersonal = {
                ...personal,
                birthDay: moment(birthDay),
            };
        }
        return {
            ...this.getUserInfo(),
            personal: newPersonal,
            grade
        };
    };
    // 渲染个人信息卡片
    _renderCardInfo = () => {
        const name = this.getUserInfo('personal.name') || this.getUserInfo('username');
        const grade = this.getUserInfo('grade.name');
        return (
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
        )
    };
    // 个人基本信息
    _renderBaseInfo = () => {
        const personal = this.getUserInfo('personal') || {};
        const setValue = (value, key) => {
            if (key === 'birthDay') {
                return moment(value[key]).format('lll');
            }
            if (key === 'gender') {
                return genderMapping[value[key]];
            }
            return value[key];
        };
        return <EduDescription containerProps={{
            title: '基本信息',
            style: {width: '60%', marginLeft: 20}
        }}
                               dataSource={personal}
                               setValue={setValue}
        />
    };
    _renderGradeInfo = () => {
        const grade = this.getUserInfo('grade') || {};
        // 过滤字段
        const {__v, _id, courses, ...other} = grade;
        const setValue = (value, key) => {
            if (key === 'createAt') {
                return moment(value[key]).format('lll');
            }
            return value[key];
        };
        const setLabel = (value, key, label) => {
            if (key === 'name') {
                return lang.grade.name;
            }
            return label;
        };
        return <EduDescription containerProps={{
            title: '班级信息',
        }}
                               dataSource={other}
                               setValue={setValue}
                               setLabel={setLabel}
        />
    };
    _renderCourseInfo = () => {
        const courses = this.getUserInfo('grade.courses') || [];
        return courses.map((item, index) => {
            const {__v, _id, courses, name, ...other} = item;
            const setValue = (value, key) => {
                // 老师
                if (key === 'teach') {
                    return value.teach.name;
                }
                // 考试
                if (key === 'exams') {
                    return `${value.exams.length}`
                }
                return value[key];
            };
            const setLabel = (value, key, label) => {
                // 总人数
                if (key === 'total') {
                    return lang.grade.total;
                }
                if (key === 'exams') {
                    return lang.exams.total;
                }
                return label;
            };
            return <EduDescription key={index}
                                   containerProps={{
                                       title: name,
                                   }}
                                   dataSource={other}
                                   setValue={setValue}
                                   setLabel={setLabel}
            />
        })
    };

    render() {
        const {loading} = this.state;
        const cardProps = {
            className: 'userCenter_card',
            loading: loading
        };

        return (
            <div className="container_userCenter">
                <EduDrawer ref={node => this.eduDrawer = node} title="编辑信息">
                    <UpdateForm fields={userUpdateForm} onSubmit={this.onSubmit}
                                initialValues={this.getInitialValues()}/>
                </EduDrawer>
                <Card title={lang.personalInfo} {...cardProps}>
                    <Row>
                        {this._renderCardInfo()}
                        {this._renderBaseInfo()}
                    </Row>
                </Card>
                <Card title={lang.gradeInfo} {...cardProps}>
                    {this._renderGradeInfo()}
                    {this._renderCourseInfo()}
                </Card>
            </div>
        );
    }
}
