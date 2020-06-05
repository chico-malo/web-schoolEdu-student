import { eduKey } from '~/utils/localStorageService/edi.key';
import { LocalStorageService } from 'ray-web-common/lib/core/sotre';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-22
 */

// setToken
export const setAccessToken = data => {
    LocalStorageService.setStorage(eduKey.accessToken, data);
};
// getToken
export const getAccessToken = () => {
    return LocalStorageService.getStorage(eduKey.accessToken);
};
