# X-Server-Koa

## 启动

```
npm install
npm start
```

## API
非完全Restful化

```bash
http://localhost:3030
    \_api
        \_users
            \_sign
                \_in            // post 登录
                \_up            // post 注册
                \_out           // post 退出
            \_list              // get 用户列表
            \_detail
                \_:id           // get 获取单个用户详情
            \_update
                \_:id           // post 更新单个用户
            \_remove
                \_:id           // post 删除单个用户
                \_batch         // post 批量删除用户
        \_articles
            \_add               // post 添加文章
            \_list              // get 获取文章列表
            \_detail
                \_:id           // get 获取文章详情
            \_update
                \_:id           // post 更新文章
            \_remove
                \_:id           // post 删除文章
                \_batch         // post 批量删除文章
```

## TODO

1.数据库相关操作待完善。
2.列表接口支持分页。
3.jwt接入。