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
    userName: {
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
// 用户登录
userSchema.statics.doSignIn = async function (userInfo) {
    let _t = this
    // 1.判断是否存在用户
    let hasUser = null
    if (userInfo.userName) {
        hasUser = await _t.findOne({userName: userInfo.userName})
    }
    // 2.判断用户是拿 用户名||邮箱 登录的
    let userDetail = null
    if (hasUser) {
        userDetail = await _t.findOne({userName: userInfo.userName, password: userInfo.password})

        if (userDetail) {
            return {
                status: 0,
                msg: '登录成功',
                res: {
                    id: userDetail._id,
                    userName: userDetail.userName,
                    email: userDetail.email
                }
            }
        } else {
            return {
                status: 1,
                msg: '用户名或密码不正确',
                res: null
            }
        }
    } else {
        return {
            status: 2,
            msg: '该用户没有注册，请先注册',
            res: null
        }
    }
}

// 用户注册
userSchema.statics.doSignUp = async function (userInfo) {
    let _t = this
    // 1.判断是否存在用户
    let hasUser = null
    if (userInfo.userName) {
        hasUser = await _t.findOne({userName: userInfo.userName})
    }

    // 2.判断用户是拿 用户名||邮箱 登录的
    let userDetail = null
    // 不存在则创建新用户
    if (!hasUser) {
        let user = new _t(userInfo)
        //  创建成功返回true
        userDetail = await user.save()
        if (userDetail) {
            return {
                status: 0,
                msg: '新用户注册成功，请登录',
                res: {
                    id: userDetail._id,
                    userName: userDetail.userName,
                    email: userDetail.email
                }
            }
        } else {
            return {
                status: 1,
                msg: '新用户注册失败',
                res: null
            }
        }
    } else {
        return {
            status: 2,
            msg: '该用户已注册，请登录',
            res: null
        }
    }
}

// TODO 用户退出
userSchema.statics.doSignOut = async function (userInfo) {
    return {
        status: 0,
        msg: '用户退出成功！',
        res: null
    }
}

// 查找所有用户
userSchema.statics.getUsers = async function () {
    let _t = this
    let res = await _t.find()

    if (res) {
        return {
            status: 0,
            msg: '查询用户列表成功',
            res: {
                count: res.length,
                list: res
            }
        }
    } else {
        return {
            status: 1,
            msg: '查询用户列表失败',
            res: null
        }
    }
}

// 按ID查询
userSchema.statics.getUserById = async function (id) {
    let _t = this
    let res = await _t.findById(id)
    if (res) {
        return {
            status: 0,
            msg: '查询用户详情成功',
            res: {
                id: res._id,
                userName: res.userName,
                email: res.email
            }
        }
    } else {
        return {
            status: 1,
            msg: '查询用户详情失败',
            res: null
        }
    }
}

// 更新用户
userSchema.statics.updateUserById = async function (id, userInfo) {
    let _t = this

    let res = await _t.update(id, userInfo)

    if (res) {
        return {
            status: 0,
            msg: '更新用户成功',
            res: res
        }
    } else {
        return {
            status: 1,
            msg: '更新用户失败',
            res: null
        }
    }
}

// 删除用户
userSchema.statics.removeUserById = async function (id) {
    let _t = this
    let res = await _t.findByIdAndRemove(id)

    if (res) {
        return {
            status: 0,
            msg: '删除用户成功',
            res: res
        }
    } else {
        return {
            status: 1,
            msg: '删除用户失败',
            res: null
        }
    }
}


// 发布用户model
export default mongoose.model('Users', userSchema)
