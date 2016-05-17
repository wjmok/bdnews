# Node.js



## 框架以及第三发库

* sequelize (mysql orm)
* koa (web framework)
* swig (web template engine)


## 调试

* http://localhost:3000/news.html 打开静态页面
* http://localhost:3000/ 打开动态路由页面
* http://localhost:3000/admin/news 新闻后台管理页面

## 开发注意事项

* node_modules 不要加入github 残酷  .gitignore 里面加入忽略
* package.json 里面的第三方模块依赖的版本号固定 如 ^1.2.0 ，需要修改成 1.2.0
* 修改服务器代码需要重启服务, npm run dev


## 开发环境

linux
```
$ export NODE_ENV=development; node app.js
```

windows
```
npm run dev
```

## 生产环境部署

