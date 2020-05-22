/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-22
 * 加密
 */

export class localStorageService {
    // 加密
    static compileStr(code) {
        let c = String.fromCharCode(code.charCodeAt(0) + code.length);
        for (let i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
        }
        return escape(c);
    }

    // 解密
    static unCompileStr(code) {
        code = unescape(code);
        let c = String.fromCharCode(code.charCodeAt(0) - code.length);
        for (let i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
        }
        return c;
    }

    // set方法
    static setStorage(key, data) {
        let default_string = JSON.stringify(data);
        let default_compile = this.compileStr(default_string);
        localStorage.setItem(key, default_compile);
    };

    // get方法
    static getStorage(key) {
        let default_string = localStorage.getItem(key);
        if (default_string) {
            let default_unCompile = this.unCompileStr(default_string);
            return JSON.parse(default_unCompile);
        }
        return false;
    };
}

