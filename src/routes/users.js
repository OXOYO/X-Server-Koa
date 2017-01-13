/**
 * Created by yangfan on 2017/1/8.
 *
 * Users 路由
 */

import Users from '../models/Users';

export default (router) => {
    router
        .get('/oxo', async ctx => ctx.body = 'xxxxxxxxxxxxxxxxxx')
        .get('/user', function *(next) {
            this.body = '试试行不行'
        })
        .get('/oneUser', function (ctx) {
            ctx.body = '不知道还是不是404'
        })
        // 获取所有用户信息
        .get('/users', async (ctx, next) => {
            await next()
            // 查找所有用户
            let res =  await Users.findAll()
            console.log('x-log_res ', res)
            if (res) {
                ctx.body = res
            } else {
                /*ctx.body = {
                    title: 'test',
                    name: 'oxo',
                    date: '2017-01-12 23:59:53'
                }*/
                // ctx.body = '啥也没找到！'
            }
        })
        // 新建用户
        .post('/users', async ctx => {
            let reqBody = ctx.request.body
            // 创建用户
            let res = await Users.create({
                name: reqBody.name,
                email: reqBody.email,
                password: reqBody.password,
                confirm_password: reqBody.confirm_password,
            })

            if (res) {
                ctx.body = res
            }
        })
        // 获取某一个用户信息
        .get('/users/:id', async ctx => {
            let reqParams = ctx.params
            // let res = await Users.findById(reqParams.id)
            let res = null
            if (res) {
                ctx.body = res
            } else {
                ctx.body = {
                    title: 'test',
                    name: 'oxo',
                    date: '2017-01-12 23:59:53'
                }
            }
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

            if (res) {
                ctx.body = res
            }
        })
        // 删除某一个用户
        .delete('/users/:id', async ctx => {
            let reqParams = ctx.params

            let res = await Users.removeById(reqParams.id)

            if (res) {
                ctx.body = res
            }
        })
}