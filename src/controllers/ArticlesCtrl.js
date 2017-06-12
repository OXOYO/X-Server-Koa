/**
 * Created by yangfan on 2017/6/12.
 *
 * Articles 控制器
 */

import Articles from '../models/Articles'

export default {
    doAddArticle: async (ctx, next) => {
        await next()
        // 执行添加
        let reqBody = ctx.request.body
        let res = await Articles.doAddArticle({
            title: reqBody.title,
            author: reqBody.author,
            tag: reqBody.tag,
            content: reqBody.content
        })

        ctx.body = res || {}
    },
    getArticles: async (ctx, next) => {
        await next()
        // 查找所有文章
        let res = await Articles.getArticles()
        ctx.body = res || {}
    },
    getArticleById: async (ctx, next) => {
        await next()
        // 查找文章详情
        let reqParams = ctx.params
        let res = await Articles.getArticleById(reqParams.id)

        ctx.body = res || {}
    },
    updateArticleById: async (ctx, next) => {
        await next()

        let reqParams = ctx.params
        let reqBody = ctx.request.body

        let res = await Articles.updateArticleById(reqParams.id, {
            title: reqBody.title,
            author: reqBody.author,
            tag: reqBody.tag,
            content: reqBody.content
        })

        ctx.body = res || {}
    },
    removeArticleById: async ctx => {
        let reqParams = ctx.params

        let res = await Articles.removeArticleById(reqParams.id)

        ctx.body = res || {}
    },
    // TODO 批量删除文章
    removeArticles: async ctx => {
        ctx.body = {}
    }
}