/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-02
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { PageHeader } from 'antd';
import objectPath from 'object-path';

import { StudentService } from '~/services/Student';
import { lang } from '~/locales/zh-en';
import { BaseContainer } from '~/superClass/BaseContainer';
import { SearchForm } from '~/component/SearchForm';
import { EduDrawer } from '~/component/EduDrawer';
import UpdateForm from '~/component/UpdateForm/UpdateForm';
import SearchTable from '~/component/SearchGroup/SearchTable';
import BaseClass from '~/superClass/BaseClass';
import { studentManageSearch } from '~/container/student/config/student.manage.search';
import { studentManageColumn } from '~/container/student/config/student.manage.column';
import { studentUpdateForm } from '~/container/student/config/student.manage.form';

@BaseContainer({})
@observer
export default class StudentManage extends BaseClass<any> {
    eduDrawer;
    state = {
        record: {}
    };

    componentDidMount() {
        this.onSearch();
    }

    onSearch = (params = {}) => {
        StudentService.query(params);
    };

    onAdd = () => {
        this.eduDrawer.onSwitch(true);
        this.setState({record: {}});
    };

    onEdit = (record) => {
        const newTeachId = objectPath.get(record, 'teach._id');
        // set value
        const newRecord = {
            ...record,
            teach: newTeachId
        };
        this.setState({record: newRecord});
        this.eduDrawer.onSwitch(true);
    };

    handleSubmit = (values) => {
        const {record} = this.state;
        const isUpdate = Object.keys(record).length > 0;
        const newValues = {
            ...record,
            ...values,
        };
        StudentService.update(newValues, isUpdate, () => {
            this.eduDrawer.onSwitch(false);
            if (isUpdate) {
                this.setState({record: {}});
            }
        });
    };

    onDel = (id) => {
        StudentService.del(id);
    };

    render() {
        const {data, processing} = StudentService;
        const {record} = this.state;
        return (
            <>
                <PageHeader
                    subTitle=""
                    style={{background: '#fff'}}
                    title={lang.menu.student}
                />
                <SearchForm fields={studentManageSearch} onSearch={this.onSearch}/>
                <SearchTable columns={studentManageColumn} dataSource={data} loading={processing} onAdd={this.onAdd}
                             onEdit={this.onEdit} onDel={this.onDel}
                />
                <EduDrawer ref={node => this.eduDrawer = node} title={this.getFormTitle()}>
                    <UpdateForm fields={studentUpdateForm} onSubmit={this.handleSubmit} initialValues={record}/>
                </EduDrawer>
            </>
        )
    }
}
