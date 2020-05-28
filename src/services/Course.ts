/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-28
 * 课程管理
 */
import { flow, observable } from 'mobx';
import { Request } from '~/core/Request';
import { ReqUrl } from '~/constants/ReqUrl';

class Course {
    @observable
    public data: object[] = [];

    @observable
    public processing: boolean = false;

    // 搜索
    query = flow(function* (body) {
        this.processing = true;
        try {
            const {success, payload} = yield Request({
                url: `${ReqUrl.course}`,
                body
            });
            if (success) {
                this.data = payload;
            }
        } catch (error) {
            console.log('error');
        }
        this.processing = false;
    })
}

export const CourseService = new Course();
