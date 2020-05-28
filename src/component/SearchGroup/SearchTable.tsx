/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 */
import * as React from 'react';
import { Alert, Button, Card, Space, Table } from 'antd';
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

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
    };

    render() {
        const {actionProps, cardProps, onAdd, ...other} = this.props;
        const total = other.dataSource.length;
        return (
            <Card {...cardProps} style={{marginTop: 20}}>
                <div {...actionProps}>
                    <Space>
                        <Button type="primary" onClick={onAdd}>新增</Button>
                        <Button type="primary">编辑</Button>
                        <Button type="primary" danger>删除</Button>
                    </Space>
                </div>
                <Alert message={`共${total}条数据`} type="success" style={{margin: '20px 0'}} showIcon/>
                <Table onChange={this.onChange}
                       rowSelection={}
                       rowKey="_id"
                       size="small"
                       style={{marginTop: 20}}
                       pagination={{pageSize: 10, size: 'small', total}}
                       hideOnSinglePage
                       {...other}
                />
            </Card>
        )
    }
}
