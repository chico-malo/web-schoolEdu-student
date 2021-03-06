/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2020-05-15
 *  // axios详细文档https://www.kancloud.cn/yunye/axios/234845
 */
import axios from 'axios';
import { getAccessToken } from '~/utils/localStorageService/edu.service';
import { message } from 'antd';
import { Control } from 'react-keeper';
import objectPath from 'object-path';
import { routePath } from '~/core/route/route.path';
import { RequestUtils } from '~/core/Request/requestUtils';

const baseUrl = (window as any).bastApi;

export enum MethodProps {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export interface RequestProps {
    method?: MethodProps
    url: string
    isMock?: boolean
    body?: any
}

export const Request = ({method = MethodProps.GET, url, isMock, body, ...other}: RequestProps) => {
    let reqUrl = `${baseUrl}/${url}`;
    // 修改成访问mock数据
    if (isMock) {
        reqUrl = `${baseUrl}/${method}/${url}`;
    }
    // 配置实例，默认值
    let instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {
            'X-Custom-Header': 'foobar',
            'Authorization': `Bearer ${getAccessToken()}`
        }
    });
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    // 请求拦截器
    instance.interceptors.request.use(
        config => {
            // 请求之前做的操作
            return config;
        },
        error => {
            // 错误
            console.warn(error);
            return Promise.reject(error);
        }
    );
    // 响应拦截器
    instance.interceptors.response.use(
        function (response) {
            // 对响应数据做点什么
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    // 参数校验
    if (method === MethodProps.GET) {
        reqUrl = `${reqUrl}?${RequestUtils.setParams(body)}`;
    }
    return instance({
        method,
        url: reqUrl,
        data: body,
        ...other,
    })
        .then(function (response) {
            // 取消请求（message 参数是可选的）
            // source.cancel('Operation canceled by the user.');
            const {data} = response;
            const {status} = data;
            if (status === 409) {
                message.info(data.response.message);
            }
            return {...data};
        })
        .catch(function (error) {
            const data = objectPath.get(error, 'response.data') || {status: '', message: ''};
            const {status} = data;
            let errorMsg = data.message || '网络错误';
            if (status === 401) {
                errorMsg = '未授权或身份验证已过期';
                Control.go(routePath.login);
            }
            console.log('error data', data);
            message.info(errorMsg);
            return data;
        });
};
