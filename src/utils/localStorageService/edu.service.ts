import { localStorageService } from '~/utils/localStorageService/index';
import { eduKey } from '~/utils/localStorageService/edi.key';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-22
 */

// setToken
export const setAccessToken = data => {
    localStorageService.setStorage(eduKey.accessToken, data);
};
// getToken
export const getAccessToken = () => {
    return localStorageService.getStorage(eduKey.accessToken);
};