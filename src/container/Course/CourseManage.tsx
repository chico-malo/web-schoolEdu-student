/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 * 课程管理
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { PageHeader, Row } from 'antd';
import objectPath from 'object-path';
import moment from 'moment';

import { CourseService } from '~/services/Course';
import { lang } from '~/locales/zh-en';
import { courseManageSearch } from '~/container/Course/config/courseManageSearch';
import { BaseContainer } from '~/superClass/BaseContainer';
import { SearchForm } from '~/component/SearchForm';
import { courseUpdateForm } from '~/container/Course/config/course.updte.form';
import { courseManageColumn } from '~/container/Course/config/courseManageColumn';
import { EduDrawer } from '~/component/EduDrawer';
import UpdateForm from '~/component/UpdateForm/UpdateForm';
import SearchTable from '~/component/SearchGroup/SearchTable';
import { DynamicForm } from '~/component/DynamicForm';

@BaseContainer({})
@observer
export default class CourseManage extends React.Component {
    eduDrawer;
    state = {
        record: {}
    }

    componentDidMount() {
        this.onSearch();
    }

    onSearch = (params = {}) => {
        CourseService.query(params);
    };

    onAdd = () => {
        this.eduDrawer.onSwitch(true);
        this.setState({record: {}});
    };

    onEdit = (record) => {
        const newTeachId = objectPath.get(record, 'teach._id');
        // 格式化时间
        const exams = objectPath.get(record, 'exams');
        const newExams = [];
        exams.forEach(item => {
            newExams.push({
                ...item,
                time: moment(item.time)
            })
        });
        // set value
        const newRecord = {
            ...record,
            teach: newTeachId,
            exams: newExams
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
        CourseService.update(newValues, isUpdate, () => {
            this.eduDrawer.onSwitch(false);
            if (isUpdate) {
                this.setState({record: {}});
            }
        });
    };

    onDel = (id) => {
        CourseService.del(id);
    };

    render() {
        const {data, processing} = CourseService;
        const {record} = this.state;
        return (
            <>
                <PageHeader
                    subTitle=""
                    style={{background: '#fff'}}
                    title={lang.menu.course}
                />
                <SearchForm fields={courseManageSearch} onSearch={this.onSearch}/>
                <SearchTable columns={courseManageColumn} dataSource={data} loading={processing} onAdd={this.onAdd}
                             onEdit={this.onEdit} onDel={this.onDel}
                />
                <EduDrawer ref={node => this.eduDrawer = node} title="编辑信息">
                    <UpdateForm fields={courseUpdateForm} onSubmit={this.handleSubmit} initialValues={record}/>
                </EduDrawer>
            </>
        )
    }
}
