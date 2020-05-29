/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 */
import *  as React from 'react';
import { routePath } from "~/core/route/route.path";
import { lang } from '~/locales/zh-en';
import {
    UserOutlined,
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
} from "@ant-design/icons";

// 头部菜单
export const teachMenu = [
    {
        title: lang.menu.course,
        path: routePath.course,
        icon: <PieChartOutlined/>
    },
    {
        title: lang.menu.teach,
        path: routePath.teach,
        icon: <DesktopOutlined/>
    },
    {
        title: lang.menu.class,
        path: routePath.class,
        icon: <UserOutlined/>
    },
];
