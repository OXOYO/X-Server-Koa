/**
 * Created by yangfan on 2017/1/8.
 *
 * Articles 模型
 */

import mongoose from 'mongoose'
import validate from 'mongoose-validator'
// import bcrypt from 'bcrypt-as-promised'

// 定义用户属性
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    author: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createTime: {
        type: String,
        required: true
    },
    updateTime: {
        type: String,
        required: true
    }
})

// 创建静态方法
// 添加文章
articleSchema.statics.doAddArticle = async function (articleInfo) {
    let _t = this
    // 1.判断是否存在同名文章
    let hasArticle = null
    if (articleInfo.title && articleInfo.author) {
        hasArticle = await _t.findOne({title: articleInfo.title, author: articleInfo.author})
    }

    let articleDetail = null
    // 不存在则创建新文章
    if (!hasArticle) {
        // TODO 更新createTime & updateTime
        articleInfo.createTime = (new Date()).getTime()
        articleInfo.updateTime = (new Date()).getTime()
        let article = new _t(articleInfo)
        //  创建成功返回true
        articleDetail = await article.save()
        if (articleDetail) {
            return {
                status: 0,
                msg: '添加文章成功！',
                res: {
                    id: articleDetail._id,
                    title: articleDetail.title,
                    author: articleDetail.author,
                    tag: articleDetail.tag,
                    content: articleDetail.content,
                    createTime: articleDetail.createTime,
                    updateTime: articleDetail.updateTime
                }
            }
        } else {
            return {
                status: 1,
                msg: '添加文章失败！',
                res: null
            }
        }
    } else {
        return {
            status: 2,
            msg: '同名文章已存在，请修改标题！',
            res: null
        }
    }
}

// 查找所有文章
articleSchema.statics.getArticles = async function () {
    let _t = this
    let res = await _t.find()

    if (res) {
        return {
            status: 0,
            msg: '查询文章列表成功',
            res: {
                count: res.length,
                list: res
            }
        }
    } else {
        return {
            status: 1,
            msg: '查询文章列表失败',
            res: null
        }
    }
}

// 按ID查询
articleSchema.statics.getArticleById = async function (id) {
    let _t = this
    let res = await _t.findById(id)
    if (res) {
        return {
            status: 0,
            msg: '查询文章详情成功',
            res: {
                id: res._id,
                title: res.title,
                author: res.author,
                tag: res.tag,
                content: res.content,
                createTime: res.createTime,
                updateTime: res.updateTime
            }
        }
    } else {
        return {
            status: 1,
            msg: '查询文章详情失败',
            res: null
        }
    }
}

// 更新文章
articleSchema.statics.updateArticleById = async function (id, articleInfo) {
    let _t = this

    // 更新updateTime
    articleInfo.updateTime = (new Date()).getTime()
    let res = await _t.update(id, articleInfo)

    if (res) {
        return {
            status: 0,
            msg: '更新文章成功',
            res: res
        }
    } else {
        return {
            status: 1,
            msg: '更新文章失败',
            res: null
        }
    }
}

// 删除文章
articleSchema.statics.removeArticleById = async function (id) {
    let _t = this
    let res = await _t.findByIdAndRemove(id)

    if (res) {
        return {
            status: 0,
            msg: '删除文章成功',
            res: res
        }
    } else {
        return {
            status: 1,
            msg: '删除文章失败',
            res: null
        }
    }
}


// 发布用户model
export default mongoose.model('Articles', articleSchema)
