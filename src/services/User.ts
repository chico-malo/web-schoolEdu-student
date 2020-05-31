/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-24
 * 用户-个人资料相关
 */
import { flow, observable } from 'mobx';
import { MethodProps, Request } from '~/core/Request';
import { ReqUrl } from '~/constants/ReqUrl';
import { message } from 'antd';

class User {
    @observable
    userInfo: object = {};

    @observable
    public processing: boolean = false;

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
    // 完善个人信息
    update = flow(function* (body, callback?) {
        this.processing = true;
        try {
            const {success} = yield Request({
                url: `${ReqUrl.user}`,
                method: MethodProps.PATCH,
                body
            });
            if (success) {
                message.success('请求成功');
                callback && callback();
                this.query();
            }
        } catch (error) {
            console.log('error');
        }
        this.processing = false;
    });
}

export const UserService = new User();
