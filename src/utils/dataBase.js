/**
 * Created by yangfan on 2017/1/13.
 *
 * 数据库相关方法
 */

import mongoose from 'mongoose'

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