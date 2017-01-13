/**
 * Created by yangfan on 2017/1/8.
 *
 * Users 模型
 */

import mongoose from 'mongoose'
import validate from 'mongoose-validator'
// import bcrypt from 'bcrypt-as-promised'

// 定义用户属性
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 12
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        validate: validate({
            validator: 'isEmail',
            message: '邮箱格式错误！'
        })
    }
})

// 创建静态方法
// 查找所有用户
userSchema.statics.findAll = async function () {
    let res = await this.find()

    if (res) {
        return {
            done: true,
            data: res
        }
    } else {
        return {
            done: false
        }
    }
}

// 按ID查询
userSchema.statics.findById = async function (id) {
    let res = await this.findById(id)

    if (res) {
        return {
            done: true,
            data: res
        }
    }
}

// 创建用户
userSchema.statics.create = async function (userInfo) {
    let user = new this(userInfo)

    // 如果已存在则返回false
    let exists = await this.findOne({email: user.email})
    if (exists) {
        return {
            done: false,
        }
    }

    //  创建成功返回true
    let back = await user.save()
    if (back) {
        return {
            done: true,
            data: back
        }
    }
}

// 更新用户
userSchema.statics.updateById = async function (id, userInfo) {
    let user = new this(userInfo)

    let res = await this.update(id, userInfo)

    if (res) {
        return {
            done: true,
            data: res
        }
    }
}

// 删除用户
userSchema.statics.removeById = async function (id) {
    let res = await this.delete(id)

    if (res) {
        return {
            done: true,
            data: res
        }
    }
}

// 发布用户model
export default mongoose.model('Users', userSchema)