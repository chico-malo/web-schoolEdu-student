/*
 * @Author: yyao
 * @Date: 2020-04-20 14:27:13
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 17:25:55
 * @Description: 首页
 */
import React from "react";
import { BaseContainer } from "~/superClass/BaseContainer/index";
import { observer } from 'mobx-react';
import Header from '~/container/Home/Header';
import { notification } from 'antd';
import { UserService } from '~/services/User';
import objectPath from 'object-path';

@BaseContainer({})
@observer
class Home extends React.Component {
    componentDidMount() {
        try {
            const {userInfo} = UserService;
            const user = objectPath.get(userInfo, 'user');
            if (user && Object.keys(user).length > 0) {
                const config: any = {
                    message: '温馨提示',
                    description: '请完善个人信息、班级信息、才能进行报课',
                    placement: 'topLeft'
                };
                notification.warning(config);
            }
        } catch (e) {
            console.log('e', e);
        }
    }

    render() {
        return <div className="container_home">
            <Header/>
        </div>;
    }
}

export default Home;
