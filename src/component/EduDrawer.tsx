/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 */

import * as React from 'react';
import { Drawer } from 'antd';
import { DrawerProps } from 'antd/lib/drawer';

export interface EduDrawerProps extends DrawerProps {

}

export class EduDrawer extends React.Component<EduDrawerProps, any> {
    state = {
        visible: false
    }
    // switch开关
    onSwitch = (status = false) => {
        this.setState({visible: status});
    }
    // 弹框关闭开关
    onClose = () => {
        const {onClose} = this.props;
        this.onSwitch();
        onClose && onClose();
    };

    render() {
        const {visible,} = this.state;
        const {title, ...other} = this.props;
        return (
            <Drawer
                title={title}
                placement="right"
                closable={this.onClose}
                onClose={this.onClose}
                visible={visible}
                maskClosable={false}
                destroyOnClose
                width="60%"
                {...other}
            >
                {this.props.children}
            </Drawer>
        );
    }
};
