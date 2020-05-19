/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2020-05-19
 * 系统级-登录-注册-搜索
 */
import { action, observable, flow } from 'mobx';
import { MethodProps, Request } from '~/core/Request';
import { ReqUrl } from '~/constants/ReqUrl';
import { routePath } from '~/core/route/route.path';
import { Control } from 'react-keeper';

class System {
    @observable processing: boolean = false;

    // 登录
    @action
    async login(body) {
        const {success} = await Request({
            method: MethodProps.POST,
            url: `${ReqUrl.login}`,
            body
        });
        if (success) {
            Control.go(routePath.home);
        }
    }

    register = flow(function* (body) {
        this.processing = true;
        try {
            const {success} = yield Request({
                method: MethodProps.POST,
                url: `${ReqUrl.register}`,
                body
            });
            console.log('this', this,  'body', body);
            if (success) {
                Control.go(routePath.home);
            }
        } catch (error) {
            console.log('error');
        }
    });

    forget = flow(function* (body) {
        this.processing = true;
        try {
            const {success} = yield Request({
                method: MethodProps.PUT,
                url: `${ReqUrl.forget}`,
                body
            });
            if (success) {
                Control.go(routePath.home);
            }
        } catch (error) {
            console.log('error');
        }
    });
}

export const SystemService = new System();
