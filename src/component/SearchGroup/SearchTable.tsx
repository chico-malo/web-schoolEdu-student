/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 */
import * as React from 'react';
import { Alert, Button, Card, Popconfirm, Row, Space, Table } from 'antd';
import { TableProps } from 'antd/es/table';
import { CardProps } from 'antd/lib/card';
import { lang } from '~/locales/zh-en';

export interface SearchTableProps extends TableProps<any> {
    actionProps?: any;
    cardProps?: CardProps;
}

export default class SearchTable extends React.Component<SearchTableProps, any> {

    onEdit = (record) => {
        const {onEdit} = this.props;
        onEdit && onEdit(record);
    }

    onDel = ({_id}) => {
        const {onDel} = this.props;
        const params = {
            _id
        };
        onDel && onDel(params);
    };

    generateColumns = () => {
        const {columns} = this.props;
        return columns.concat([{
            title: lang.operation,
            dataIndex: 'descr',
            align: 'center',
            render: (value, record) => {
                return (
                    <Space>
                        <Button size="small" onClick={this.onEdit.bind(this, record)} type="primary">{lang.edit}</Button>
                        <Popconfirm
                            title="你确定要删除该条数据？"
                            onConfirm={this.onDel.bind(this, record)}
                            okText="确认"
                            cancelText="取消"
                        >
                            <Button size="small" type="primary" danger>{lang.del}</Button>
                        </Popconfirm>
                    </Space>
                )
            }
        }]);
    };

    render() {
        const {actionProps, cardProps, onAdd, ...other} = this.props;
        const total = other.dataSource && other.dataSource.length;
        return (
            <Card {...cardProps} style={{marginTop: 20}}>
                <div {...actionProps}>
                    <Space>
                        <Button type="primary" onClick={onAdd}>新增</Button>
                    </Space>
                </div>
                <Alert message={`共${total}条数据`} type="success" style={{margin: '20px 0'}} showIcon/>
                <Table
                    rowKey="_id"
                    size="small"
                    style={{marginTop: 20}}
                    pagination={{pageSize: 10, size: 'small', total, hideOnSinglePage: true}}
                    {...other}
                    columns={this.generateColumns()}
                />
            </Card>
        )
    }
}
