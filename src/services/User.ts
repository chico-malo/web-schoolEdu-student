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
    public data: object[] = [];

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
    });
    // 获取用户列表
    queryAll = flow(function* (body = {}) {
        this.processing = true;
        try {
            const {success, payload} = yield Request({
                url: `${ReqUrl.user}`,
                body
            });
            if (success) {
                this.data = payload;
            }
        } catch (error) {
            console.log('error');
        }
        this.processing = false;
    });

    // 完善个人信息
    update = flow(function* (body, isUpdate = true, callback?) {
        this.processing = true;
        try {
            const {success} = yield Request({
                url: isUpdate ? ReqUrl.user : `${ReqUrl.user}/register`,
                method: isUpdate ? MethodProps.PATCH : MethodProps.POST,
                body
            });
            if (success) {
                message.success('请求成功');
                callback && callback();
                this.queryAll();
                this.query();
            }
        } catch (error) {
            console.log('error');
        }
        this.processing = false;
    });
}

export const UserService = new User();
