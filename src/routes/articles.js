/**
 * Created by yangfan on 2017/6/12.
 *
 * Articles 路由
 */

import ArticlesCtrl from '../controllers/ArticlesCtrl.js'

// api 命名空间
const namespace = '/articles'

export default (router) => {
    router
        // 添加文章
        .post(namespace + '/add', ArticlesCtrl.doAddArticle)
        // 获取所有文章
        .get(namespace + '/list', ArticlesCtrl.getArticles)
        // 获取文章详情
        .get(namespace + '/detail/:id', ArticlesCtrl.getArticleById)
        // 更新某一篇文章
        .post(namespace + '/update/:id', ArticlesCtrl.updateArticleById)
        // 删除某一篇文章
        .post(namespace + '/remove/:id', ArticlesCtrl.removeArticleById)
        // 批量删除文章
        .post(namespace + '/remove/batch', ArticlesCtrl.removeArticles)
}