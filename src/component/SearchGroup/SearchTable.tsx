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

    state = {
        selectedRow: [],
        selectedRowKeys: []
    }

    onSelectChange = (selectedRowKeys, selectedRow) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys, 'record', selectedRow);
        this.setState({selectedRow, selectedRowKeys});
    };

    onEdit = () => {
        const {onEdit} = this.props;
        const {selectedRow} = this.state;
        onEdit && onEdit(selectedRow[0]);
    }

    onDel = () => {
        const {onDel} = this.props;
        const {selectedRow} = this.state;
        onDel && onDel(selectedRow[0]);
    }

    render() {
        const {actionProps, cardProps, onAdd, ...other} = this.props;
        const {selectedRowKeys} = this.state;
        const total = other.dataSource.length;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        console.log('selectedRowKeys', selectedRowKeys);
        const isEdit = selectedRowKeys.length === 0 || selectedRowKeys.length > 1;
        const isDel = selectedRowKeys.length === 0;
        console.log('isDel', isDel);
        return (
            <Card {...cardProps} style={{marginTop: 20}}>
                <div {...actionProps}>
                    <Space>
                        <Button type="primary" onClick={onAdd}>新增</Button>
                        <Button type="primary"
                                disabled={isEdit}
                                onClick={this.onEdit}
                        >编辑</Button>
                        <Button type="primary" danger disabled={isDel}
                                onClick={this.onDel}
                        >删除</Button>
                    </Space>
                </div>
                <Alert message={`共${total}条数据`} type="success" style={{margin: '20px 0'}} showIcon/>
                <Table rowSelection={rowSelection}
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
