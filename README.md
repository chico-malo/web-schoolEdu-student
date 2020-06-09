# web-student-roll

#### 介绍
学籍管理系统



#### 项目架构
react + mobx + typeScript + parcel + axios

------




#### 文件结构
```
component   -- 组件
constants  	-- 常量定义、小tip
container 	-- 页面模块
core 		-- 项目核心
locales 	-- 中文映射
services 	-- 状态管理
styles  	-- 样式
superClass  -- 父类
utils 		--工具箱
index.html 	-- 入口文件
index.tsx   -- 入口文件
ali-oss-deploy.js  -- 自动上传oss脚本
fix-rc-table-source-code  -- 修复parcel打包antd错误脚本
default.conf 	-- nginx配置文件
Dockerfil  		-- 构建镜像文件
```

------



#### 命令说明

```
yarn run start   	dev开发
yarn run flxTable  	修复table组件打包错误
yarn run oss   		上传oss脚本
yarn run clear   	公用优化命令
yarn run build   	测试本地打包命令
yarn run prod   	生产包

// 开发
yarn run start

// 打包
yarn run prod	打包

// git push后即可完成自动部署打包上线
```

------



#### 自动部署说明

```
// commit中包含以下字符串表示跳过自动部署
[ci skip]
[CI SKIP]
[Ci Skip]
[ ci sKip ]
[CI SKIp ]
[Skip Ci]
[skip ci ]
```

