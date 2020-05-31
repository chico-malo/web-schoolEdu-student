/*
 * @Author: yyao
 * @Date: 2020-04-20 11:19:56
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 15:33:51
 * @Description: 基础类
 */
import React from "react";
import { observer } from 'mobx-react';
import objectPath from 'object-path';
import { UserService } from '~/services/User';

export interface BaseClassProps {
}

@observer
export default class BaseClass<T extends BaseClassProps> extends React.Component<T> {
    componentDidMount() {
        this.onSearch && this.onSearch();
    }

    isUpdate = () => {
        const {record} = this.state;
        return Object.keys(record).length > 0;
    }

    getFormTitle = () => {
        return this.isUpdate() ? '编辑信息' : '新增信息';
    }

    getUserInfo = (path) => {
        const {userInfo} = UserService;
        return objectPath.get(userInfo, `${path}`);
    }
}
