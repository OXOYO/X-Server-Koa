/**
 * Created by yangfan on 2017/6/12.
 *
 * Users 控制器
 */

import Users from '../models/Users'

export default {
    doSignIn: async (ctx, next) => {
        await next()
        // 执行登录
        let reqBody = ctx.request.body
        let res = await Users.doSignIn({
            userName: reqBody.userName,
            password: reqBody.password
        })

        ctx.body = res || {}
    },
    doSignUp: async (ctx, next) => {
        await next()
        // 执行登录
        let reqBody = ctx.request.body
        let res = await Users.doSignUp({
            userName: reqBody.userName,
            password: reqBody.password,
            email: reqBody.email
        })

        ctx.body = res || {}
    },
    doSignOut: async (ctx, next) => {
        await next()
        // 执行登录
        let reqBody = ctx.request.body
        let res = await Users.doSignOut({
            userName: reqBody.userName,
            password: reqBody.password
        })

        ctx.body = res || {}
    },
    getUsers: async (ctx, next) => {
        await next()
        // 查找所有用户
        let res = await Users.getUsers()
        ctx.body = res || {}
    },
    getUserById: async (ctx, next) => {
        await next()
        // 执行登录
        let reqParams = ctx.params
        let res = await Users.getUserById(reqParams.id)

        ctx.body = res || {}
    },
    updateUserById: async (ctx, next) => {
        await next()

        let reqParams = ctx.params
        let reqBody = ctx.request.body

        let res = await Users.updateUserById(reqParams.id, {
            userName: reqBody.userName,
            password: reqBody.password,
            email: reqBody.email
        })

        ctx.body = res || {}
    },
    removeUserById: async ctx => {
        let reqParams = ctx.params

        let res = await Users.removeUserById(reqParams.id)

        ctx.body = res || {}
    }
}