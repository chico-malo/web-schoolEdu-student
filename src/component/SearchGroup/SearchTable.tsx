/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 */
import * as React from 'react';
import { Button, Card, Space, Table } from 'antd';
import { TableProps } from 'antd/es/table';
import { CardProps } from 'antd/lib/card';

export interface SearchTableProps extends TableProps<any> {
    actionProps?: any;
    cardProps?: CardProps;
}

export default class SearchTable extends React.Component<SearchTableProps, any> {

    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    render() {
        const {actionProps, cardProps, ...other} = this.props;
        return (
            <Card {...cardProps}>
                <div {...actionProps}>
                    <Space>
                        <Button type="primary">新增</Button>
                        <Button type="primary">编辑</Button>
                        <Button type="primary" danger>删除</Button>
                    </Space>
                </div>
                <Table onChange={this.onChange}
                       rowKey="_id"
                       style={{marginTop: 20}} {...other}/>
            </Card>
        )
    }
}
