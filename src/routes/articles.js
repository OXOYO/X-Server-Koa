/**
 * Created by yangfan on 2017/6/12.
 *
 * Articles 路由
 */


import ArticlesCtrl from '../controllers/ArticlesCtrl.js'

export default (router) => {
    router
        // 添加文章
        .post('/doAddArticle', ArticlesCtrl.doAddArticle)
        // 获取所有文章
        .get('/getArticles', ArticlesCtrl.getArticles)
        // 获取文章详情
        .get('/getArticleById/:id', ArticlesCtrl.getArticleById)
        // 更新某一篇文章
        .post('/updateArticleById/:id', ArticlesCtrl.updateArticleById)
        // 删除某一篇文章
        .post('/removeArticleById/:id', ArticlesCtrl.removeArticleById)
        // 批量删除文章
        .post('/removeArticles', ArticlesCtrl.removeArticles)
}