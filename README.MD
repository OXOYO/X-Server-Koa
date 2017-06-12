# X-Server-Koa

## 启动

```
npm install
npm start
```

## API
```bash
http://localhost:3030
    \_api
        \_doSignIn          // post 登录
        \_doSignUp          // post 注册
        \_getUsers          // get 用户列表
        \_getUserById       // get 获取单个用户详情
        \_updateUserById    // post 更新单个用户
        \_removeUserById    // post 删除单个用户

        \_doAddArticle      // post 添加文章
        \_getArticles       // get 获取文章列表
        \_getArticleById    // get 获取文章详情
        \_updateArticleById // post 更新文章
        \_removeArticleById // post 删除文章
        \_removeArticles    // post 批量删除文章
```

## TODO

1.数据库相关操作待完善。
2.列表接口支持分页
3.jwt接入
4.restful标准化