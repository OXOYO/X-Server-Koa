/**
 * Created by yangfan on 2017/1/8.
 *
 * Users 路由
 */

import Users from '../models/Users';

export default (router) => {
    router
        // 访问地址：http://localhost:3030/api/signIn
        // 用户登录
        .post('/doSignIn', async (ctx, next) => {
            await next()
            // 执行登录
            let reqBody = ctx.request.body
            let res = await Users.doSignIn({
                userName: reqBody.userName,
                password: reqBody.password
            })

            ctx.body = res || {}
        })
        // 注册用户
        .post('/doSignUp', async (ctx, next) => {
            await next()
            // 执行登录
            let reqBody = ctx.request.body
            let res = await Users.doSignUp({
                userName: reqBody.userName,
                password: reqBody.password,
                email: reqBody.email
            })

            ctx.body = res || {}
        })
        // 获取所有用户信息
        .get('/getUsers', async (ctx, next) => {
            await next()
            // 查找所有用户
            let res = await Users.getUsers()
            ctx.body = res || {}
        })
        // 获取某一个用户信息
        .get('/getUserById', async (ctx, next) => {
            await next()
            // 执行登录
            let reqParams = ctx.params
            let reqQuery = ctx.query
            let reqBody = ctx.request.body
            console.log('xxx', reqQuery)
            let res = await Users.getUserById(reqBody.id)

            ctx.body = res || {}
        })
        // 更新某一个用户
        .post('/updateUserById', async ctx => {
            let reqBody = ctx.request.body

            let res = await Users.updateUserById(reqBody.id, {
                name: reqBody.name,
                email: reqBody.email,
                password: reqBody.password,
                confirm_password: reqBody.confirm_password,
            })

            ctx.body = res || {}
        })
        // 删除某一个用户
        .post('/removeUserById', async ctx => {
            let reqBody = ctx.request.body

            let res = await Users.removeById(reqBody.id)

            ctx.body = res || {}
        })
}