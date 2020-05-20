/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2020-05-15
 *  // axios详细文档https://www.kancloud.cn/yunye/axios/234845
 */
import axios from 'axios';

const baseUrl = (window as any).bastApi;

export enum MethodProps {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export interface RequestProps {
    method: MethodProps
    url: string
    isMock?: boolean
    body: any
}

export const Request = ({method, url, isMock, body, ...other}: RequestProps) => {
    let reqUrl = `${baseUrl}/api/${url}`;
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
            'Access-Control-Allow-Origin': 'http://localhost:3000/login',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Request-Method': 'PUT,POST,GET,DELETE,OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, cc'
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
    let newBody: any = body;
    if (method === MethodProps.POST) {
        newBody = JSON.stringify(body)
    }
    return instance({
        method,
        url: reqUrl,
        data: newBody,
        ...other,
    })
        .then(function (response) {
            // 取消请求（message 参数是可选的）
            // source.cancel('Operation canceled by the user.');
            const {data} = response;
            return {...data};
        })
        .catch(function (error) {
            return {success: false, error};
        });
};
