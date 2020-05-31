/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-30
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import SearchTable from '~/component/SearchGroup/SearchTable';
import { lang } from '~/locales/zh-en';
import { BaseContainer } from '~/superClass/BaseContainer';
import { PageHeader } from 'antd';
import objectPath from 'object-path';
import { EduDrawer } from '~/component/EduDrawer';
import UpdateForm from '~/component/UpdateForm/UpdateForm';
import BaseClass from '~/superClass/BaseClass';
import { GradeService } from '~/services/Grade';
import { GradeUpdateForm } from '~/container/Grade/config/grade.manage.form';
import { GradeManageColumn } from '~/container/Grade/config/grade.manage.column';

@BaseContainer({})
@observer
export default class GradeManage extends BaseClass<any> {
    eduDrawer;
    state = {
        record: {}
    }

    onSearch = (params = {}) => {
        GradeService.query(params);
    };

    onAdd = () => {
        this.eduDrawer.onSwitch(true);
        this.setState({record: {}});
    };

    onEdit = (record) => {
        // 隐射班级value格式
        const courses = objectPath.get(record, 'courses');
        const newCourses = [];
        if (courses) {
            courses.forEach(item => newCourses.push(item._id));
        }
        // set value
        const newRecord = {
            ...record,
            courses: newCourses
        };
        this.setState({record: newRecord});
        console.log('record', record, 'newRecord', newRecord);
        this.eduDrawer.onSwitch(true);
    }

    handleSubmit = (values) => {
        const {record} = this.state;
        const isUpdate = this.isUpdate();
        const newValues = {
            ...record,
            ...values,
        };
        GradeService.update(newValues, isUpdate, () => {
            this.eduDrawer.onSwitch(false);
            if (isUpdate) {
                this.setState({record: {}});
            }
        });
    };

    onDel = (id) => {
        GradeService.del(id);
    };

    render() {
        const {data, processing} = GradeService;
        const {record} = this.state;
        return (
            <>
                <PageHeader
                    subTitle=""
                    style={{background: '#fff'}}
                    title={lang.menu.grade}
                />
                <SearchTable columns={GradeManageColumn} dataSource={data} loading={processing} onAdd={this.onAdd}
                             onEdit={this.onEdit} onDel={this.onDel}
                />
                <EduDrawer ref={node => this.eduDrawer = node} title={this.getFormTitle()}>
                    <UpdateForm fields={GradeUpdateForm} onSubmit={this.handleSubmit} initialValues={record}/>
                </EduDrawer>
            </>
        )
    }
}
