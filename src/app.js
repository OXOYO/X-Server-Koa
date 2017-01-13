/**
 * Created by yangfan on 2016/12/22.
 */

import Koa from 'koa'

import middleware from './middleware'
import api from './api'
import { port, key, dbConfig} from './config'
import { collectDB } from './utils/dataBase'

const app = new Koa()

// console.log('x-log-api', api())

app.keys = [key]

app.use(middleware(app))
app.use(api())
// app.use(ctx => ctx.status = 404)
// 响应
/*app.use(async ctx => {
    ctx.body = 'This X Server Koa!'
})*/

/*(async() => {
    try {
        // 连接数据库
        const info = await collectDB(dbConfig.url)
        console.log('x-log_info', info)
    } catch (error) {
        console.error('Unable to connect to database');
    }
})()*/

try {
    // 连接数据库
    const info = collectDB(dbConfig.url)
    console.log('x-log_info', info)
} catch (error) {
    console.error('Unable to connect to database');
}

app.listen(port, function () {
    console.log('X-Server-Koa is listening to http://localhost:' + port)
})

export default app