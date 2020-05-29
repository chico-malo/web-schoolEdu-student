/*
 * @Author: yyao
 * @Date: 2020-04-20 11:19:56
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-20 15:33:51
 * @Description: 基础类
 */
import React from "react";

export interface BaseClassProps {
}

export default class BaseClass<T extends BaseClassProps> extends React.Component<T> {
    componentDidMount() {
        this.onSearch();
    }

    isUpdate = () => {
        const {record} = this.state;
        return Object.keys(record).length > 0;
    }

    getFormTitle = () => {
        return this.isUpdate() ? '编辑信息' : '新增信息';
    }
}
