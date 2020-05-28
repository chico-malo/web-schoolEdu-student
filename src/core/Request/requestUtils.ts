/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-28
 */
export class RequestUtils {

    static setParams = (params) => {
        const paramsArr = [];
        for (const key in params) {
            paramsArr.push(key + "=" + params[key])
        }
        return paramsArr.join('&');
    }

}
