/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-06-09
 * oss 自动部署脚本
 */
const fs = require('fs');
const path = require('path');
const util = require('util');
const OSS = require('ali-oss');
const syncer = require('oss-syncer');
const co = require('co');

const promisifyReaddir = util.promisify(fs.readdir);
const promisifyStat = util.promisify(fs.stat);

// 存储在bucket中的目录
const bucketPath = "school";

// oss客户端
const client = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAI4FzwEB6pA5u3cqgEAc8W',
    accessKeySecret: '3qmssyKwyOZUuhBMydmRAK19qktKSe',
    bucket: 'gityy-school',
});

// updage
const publicPath = path.resolve(__dirname, './dist');

async function run(proPath = '') {
    const dir = await promisifyReaddir(`${publicPath}${proPath}`);
    for (let i = 0; i < dir.length; i++) {
        const stat = await promisifyStat(path.resolve(`${publicPath}${proPath}`, dir[i]));

        if (stat.isFile()) {
            const fileStream = fs.createReadStream(path.resolve(`${publicPath}${proPath}`, dir[i]));
            if (dir[i] !== 'index.html') {
                const fileName = `${bucketPath}/${dir[i]}`;
                console.log(`上传文件: ${fileName}`);
                await client.putStream(fileName, fileStream);
            }
        } else {
            console.error('publicPath 错误，不是一个文件');
        }
    }
}

// del
co(function* () {
    // bucketPath为指定目录,删除后再运行文件更新
    yield syncer.walk(client, bucketPath, function* (meta) {
        client.delete(meta.name)
    })
})
    .catch(err => console.error(err.stack))
    .then(run());


