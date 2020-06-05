/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-02
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { PageHeader } from 'antd';
import objectPath from 'object-path';

import { lang } from '~/locales/zh-en';
import { BaseContainer } from '~/superClass/BaseContainer';
import { EduDrawer } from '~/component/EduDrawer';
import BaseClass from '~/superClass/BaseClass';
import { studentManageSearch } from '~/container/student/config/student.manage.search';
import { studentManageColumn } from '~/container/student/config/student.manage.column';
import { studentUpdateForm } from '~/container/student/config/student.manage.form';
import moment from 'moment';
import { UserService } from '~/services/User';
import { SearchForm } from 'ray-web-common/lib/component/SearchForm';
import SearchTable from 'ray-web-common/lib/component/SearchGroup/SearchTable';
import UpdateForm from 'ray-web-common/lib/component/UpdateForm/UpdateForm';

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
        UserService.queryAll(params);
    };

    onAdd = () => {
        this.eduDrawer.onSwitch(true);
        this.setState({record: {}});
    };

    onEdit = (record) => {
        this.setState({record});
        this.eduDrawer.onSwitch(true);
    };

    handleSubmit = (values) => {
        const {record} = this.state;
        const isUpdate = this.isUpdate();
        const newValue = {
            ...record,
            ...values,
        };
        UserService.update(newValue, isUpdate, () => {
            this.eduDrawer.onSwitch(false);
            if (isUpdate) {
                this.setState({record: {}});
            }
        });
    };
    onDel = (id) => {
        UserService.del(id);
    };

    getInitialValues = (record) => {
        const personal = objectPath.get(record, 'personal');
        const birthDay = this.getUserInfo('personal.birthDay') || {};
        const grade = objectPath.get(record, 'grade._id');
        let newPersonal = personal;
        if (birthDay) {
            newPersonal = {
                ...personal,
                birthDay: moment(birthDay),
            };
        }
        return {
            ...record,
            personal: newPersonal,
            confirm: record.password,
            grade,
        }
    };

    render() {
        const {data, processing} = UserService;
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
                    <UpdateForm fields={studentUpdateForm(record)} onSubmit={this.handleSubmit}
                                initialValues={this.getInitialValues(record)}/>
                </EduDrawer>
            </>
        )
    }
}
