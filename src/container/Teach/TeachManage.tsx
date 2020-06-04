/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-29
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import objectPath from 'object-path';
import { PageHeader } from 'antd';
import moment from 'moment';

import SearchTable from '~/component/SearchGroup/SearchTable';
import { lang } from '~/locales/zh-en';
import { BaseContainer } from '~/superClass/BaseContainer';
import { SearchForm } from '~/component/SearchForm';
import { EduDrawer } from '~/component/EduDrawer';
import UpdateForm from '~/component/UpdateForm/UpdateForm';
import { teachUpdateForm } from '~/container/Teach/config/teach.manage.form';
import { TeachManageColumn } from '~/container/Teach/config/teach.manage.column';
import { teachManageSearch } from '~/container/Teach/config/teach.manage.search';
import { TeachService } from '~/services/Teach';
import BaseClass from '~/superClass/BaseClass';

@BaseContainer({})
@observer
export default class CourseManage extends BaseClass<any> {
    eduDrawer;
    state = {
        record: {}
    }

    onSearch = (params = {}) => {
        TeachService.query(params);
    };

    onAdd = () => {
        this.eduDrawer.onSwitch(true);
        this.setState({record: {}});
    };

    onEdit = (record) => {
        this.setState({record});
        this.eduDrawer.onSwitch(true);
    }

    handleSubmit = (values) => {
        const {record} = this.state;
        const isUpdate = this.isUpdate();
        const newValues = {
            ...record,
            ...values.personal,
        };
        console.log('newValues', newValues);
        TeachService.update(newValues, isUpdate, () => {
            this.eduDrawer.onSwitch(false);
            if (isUpdate) {
                this.setState({record: {}});
            }
        });
    };

    onDel = (id) => {
        TeachService.del(id);
    };

    getInitialValues = (record) => {
        const birthDay = objectPath.get(record, 'birthDay');
        let newPersonal = {personal: record};
        if (birthDay) {
            newPersonal = {
                personal: {
                    ...record,
                    birthDay: moment(birthDay)
                }
            }
        }
        return newPersonal;
    };

    render() {
        const {data, processing} = TeachService;
        const {record} = this.state;
        return (
            <>
                <PageHeader
                    subTitle=""
                    style={{background: '#fff'}}
                    title={lang.menu.teach}
                />
                <SearchForm fields={teachManageSearch} onSearch={this.onSearch}/>
                <SearchTable columns={TeachManageColumn} dataSource={data} loading={processing} onAdd={this.onAdd}
                             onEdit={this.onEdit} onDel={this.onDel}
                />
                <EduDrawer ref={node => this.eduDrawer = node} title={this.getFormTitle()}>
                    <UpdateForm fields={teachUpdateForm} onSubmit={this.handleSubmit}
                                initialValues={this.getInitialValues(record)}/>
                </EduDrawer>
            </>
        )
    }
}
