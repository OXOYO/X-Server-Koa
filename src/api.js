/**
 * Created by yangfan on 2017/1/8.
 */

import compose from 'koa-compose'
import Router from 'koa-router'

// 导入配置信息
import { prefix } from './config'
// 导入路由表
import routes from './routes'

export default function api () {
    const router = new Router({ prefix })
    console.log('x-log_routes ', routes)
    Object.keys(routes).forEach(name => routes[name](router))
    console.log('x-log_router', router)
    return compose([
        router.routes(),
        router.allowedMethods({
            throw: true
        })
    ])
}