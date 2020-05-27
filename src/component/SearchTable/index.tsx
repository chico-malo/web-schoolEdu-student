/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 */
import * as React from 'react';
import { Button, Card, Table } from 'antd';
import { lang } from '~/locales/zh-en';

const columns = [
    {
        title: lang.course.name,
        dataIndex: 'name',
        filters: [
            {
                text: '语文',
                value: '语文',
            },
            {
                text: '数学',
                value: '',
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: lang.course.teach,
        dataIndex: 'teach',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: lang.descr,
        dataIndex: 'descr',
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

export default class SearchTable extends React.Component<any, any> {

    render() {
        const {dataSource = []} = this.props;
        return (
            <Card>
                <div>
                    <Button type="primary">新增</Button>
                    <Button type="primary" style={{margin: '0 10px'}}>编辑</Button>
                    <Button type="primary" danger>删除</Button>
                </div>
                <Table columns={columns} dataSource={dataSource} onChange={onChange} style={{marginTop: 20}}/>
            </Card>
        )
    }
}
