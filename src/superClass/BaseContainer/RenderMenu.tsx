/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-27
 * 老师模块才有的菜单
 */
import React from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';

export const RenderMenu: React.FC = ({config, onMenuLick, props}) => {
    const renderMenuItem: any = (item) => {
        const {path, title, ...other} = item;
        return (
            <Menu.Item key={path} onClick={onMenuLick.bind(this, path)} {...other}>
                {title}
            </Menu.Item>
        )
    };
    return (
        <Menu {...props}>
            {config.map((item, index) => {
                const {children, icon, title} = item;
                if (children) {
                    return (
                        <SubMenu key={index} icon={icon} title={title}>
                            {
                                children.map((item) => item(item))
                            }
                        </SubMenu>
                    )
                }
                return renderMenuItem(item);
            })}
        </Menu>
    )
};
