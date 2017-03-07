/**
 * Created by yangfan on 2017/1/8.
 */

// 路由前缀
export const prefix = '/api'
// 服务端口
export const port = 3030
// app key 用于session
export const key = 'X-Server'

// 数据库名称
const dbName = 'X-Server-Koa'
// Mongo 相关配置
export const dbConfig = {
    name: dbName,
    url: 'mongodb://localhost/' + dbName,
    admin: {
        name: 'admin',
        password: 'admin',
        email: 'zmn2007.hi@163.com'
    }
}