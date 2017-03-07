/**
 * Created by yangfan on 2017/1/13.
 *
 * 数据库相关方法
 */

import mongoose from 'mongoose'
import Users from '../models/Users'

// 连接数据库
export function collectDB(url) {
    return new Promise((resolve, reject) => {
        mongoose.connection
            .on('connected', () => console.log('Connection success!'))
            .on('error', error => reject(error))
            .on('close', () => console.log('Database connection closed.'))
            .once('open', () => resolve(mongoose.connections[0]))

        mongoose.connect(url)
    })
}

// 创建管理员
export function createAdmin(userInfo) {
    return new Promise((resolve, reject) => {
        (async () => {
            try {
                // 先查找一下是否已经创建过了
                const user = await Users.findOne({ name: userInfo.name })
                if (!user) {
                    // 如果没创建则创建
                    await Users.create({
                        name: userInfo.name,
                        password: userInfo.password,
                        email: userInfo.email
                    })
                }
                resolve()
            } catch (error) {
                reject(error)
            }
        })()
    })
}
