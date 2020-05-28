/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 * 课程管理
 */
import * as React from 'react';
import { observer } from 'mobx-react';
import { CourseService } from '~/services/Course';
import SearchTable from '~/component/SearchGroup/SearchTable';
import { lang } from '~/locales/zh-en';
import { courseManageSearch } from '~/container/Course/config/courseManageSearch';
import { BaseContainer } from '~/superClass/BaseContainer';
import { PageHeader } from 'antd';
import { SearchForm } from '~/component/SearchForm';
import { courseManageColumn } from '~/container/Course/config/courseManageColumn';
import { EduDrawer } from '~/component/EduDrawer';
import UpdateForm from '~/component/UpdateForm/UpdateForm';
import { courseUpdateForm } from './config/course.updte.form';

@BaseContainer({})
@observer
export default class CourseManage extends React.Component {
    eduDrawer;

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = (params = {}) => {
        CourseService.query(params);
    };

    onAdd = () => {
        this.eduDrawer.onSwitch(true);
    };

    handleSubmit = (values) => {
        CourseService.create(values, () => {
            this.eduDrawer.onSwitch(false);
        });
    }

    render() {
        const {data, processing} = CourseService;
        return (
            <>
                <PageHeader
                    subTitle=""
                    style={{background: '#fff'}}
                    title={lang.menu.course}
                />
                <SearchForm fields={courseManageSearch} onSearch={this.handleSearch}/>
                <SearchTable columns={courseManageColumn} dataSource={data} loading={processing} onAdd={this.onAdd}/>
                <EduDrawer ref={node => this.eduDrawer = node} title="编辑信息">
                    <UpdateForm fields={courseUpdateForm} onSubmit={this.handleSubmit}/>
                </EduDrawer>
            </>
        )
    }
}
