/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 * 课程管理
 */
import * as React from 'react';
import { BaseContainer } from '~/superClass/BaseContainer';
import { SearchForm } from '~/component/Search';
import { courseManageSearch } from '~/container/Course/config/courseManageSearch';
import SearchTable from '~/component/SearchTable';
import { Card, PageHeader } from 'antd';
import { lang } from '~/locales/zh-en';

@BaseContainer({})
export default class CourseManage extends React.Component {
    render() {
        return (
            <>
                <PageHeader
                    className="site-page-header"
                    title={lang.menu.course}
                    subTitle="This is a subtitle"
                />
                <SearchForm fields={courseManageSearch}/>
                <SearchTable/>
            </>
        )
    }
}
