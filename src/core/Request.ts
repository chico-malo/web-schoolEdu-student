/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2020-05-15
 *  // axios详细文档https://www.kancloud.cn/yunye/axios/234845
 */
import axios from 'axios';

const baseUrl = (window as any).bastApi;

export const Request = ({method, url, isMock = true, ...other}) => {
    let reqUrl = `${baseUrl}${url}`;
    // 修改成访问mock数据
    if (isMock) {
        reqUrl = `${baseUrl}/${method}/${url}`;
    }
    // 配置实例，默认值
    let instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
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
            console.log(response);
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    return instance({
        method,
        url: reqUrl,
        ...other,
    })
        .then(function (response) {
            // 取消请求（message 参数是可选的）
            // source.cancel('Operation canceled by the user.');
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
