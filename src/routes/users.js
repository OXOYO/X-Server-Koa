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
        .post('/signIn', async (ctx, next) => {
            await next()
            // 执行登录
            let reqBody = ctx.request.body
            let res = await Users.signIn({
                userName: reqBody.userName,
                password: reqBody.password
            })

            ctx.body = res || {}
        })
        // 注册用户
        .post('/signUp', async (ctx, next) => {
            await next()
            // 执行登录
            let reqBody = ctx.request.body
            let res = await Users.signUp({
                userName: reqBody.userName,
                password: reqBody.password,
                email: reqBody.email
            })

            ctx.body = res || {}
        })
        // 获取所有用户信息
        .get('/users', async (ctx, next) => {
            await next()
            // 查找所有用户
            let res = await Users.findAll()
            ctx.body = res || {}
        })
        // 获取某一个用户信息
        .get('/users/:id', async ctx => {
            await next()
            // 执行登录
            let reqBody = ctx.request.body
            let res = await Users.findById(reqBody.id)

            ctx.body = res || {}
        })
        // 更新某一个用户
        .put('/users/:id', async ctx => {
            let reqParams = ctx.params
            let reqBody = ctx.request.body

            let res = await Users.updateById(reqParams.id, {
                name: reqBody.name,
                email: reqBody.email,
                password: reqBody.password,
                confirm_password: reqBody.confirm_password,
            })

            ctx.body = res || {}
        })
        // 删除某一个用户
        .delete('/users/:id', async ctx => {
            let reqParams = ctx.params

            let res = await Users.removeById(reqParams.id)

            ctx.body = res || {}
        })
}