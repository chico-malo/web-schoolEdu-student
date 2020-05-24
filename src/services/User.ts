/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 * 用户-个人资料相关
 */
import { flow, observable } from 'mobx';
import { Request } from '~/core/Request';
import { ReqUrl } from '~/constants/ReqUrl';

class User {
    @observable
    userInfo: object = {};

    // 获取个人信息
    query = flow(function* () {
        try {
            const {success, payload} = yield Request({
                url: `${ReqUrl.me}`,
            });
            if (success) {
                this.userInfo = payload;
            }
        } catch (error) {
            console.log('error');
        }
    })
}

export const UserService = new User();
