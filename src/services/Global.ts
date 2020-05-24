/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 * 全局savices
 */
import { flow, observable } from 'mobx';
import { UserService } from '~/services/User';

class Global  {
    @observable
    userInfo: object = {};

    // 获取全局参数
    query = flow(function* () {
        try {
            // 获取个人信息
            UserService.query();
        } catch (error) {
            console.log('error');
        }
    })
}

export const globalService = new Global();
