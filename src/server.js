/**
 * Created by yangfan on 2017/1/17.
 */

import app from './app'
import { port, key, dbConfig} from './config'
import { collectDB, createAdmin } from './utils/dataBase'

// TODO !!! 数据库相关操作待完善。
(async() => {
    try {
        // 连接数据库
        console.log('x-log_url', dbConfig.url)
        const info = await collectDB(dbConfig.url)
        console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
    } catch (error) {
        console.error('Unable to connect to database')
    }

    try {
        // 创建管理员
        await createAdmin(dbConfig.admin)
        // 启动app
        app.listen(port, function () {
            console.log('X-Server-Koa is listening to http://localhost:' + port)
        })
    } catch (error) {
        console.log(error)
    }
})()