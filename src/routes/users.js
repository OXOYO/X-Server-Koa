/**
 * Created by yangfan on 2017/1/8.
 *
 * Users 路由
 */

import UsersCtrl from '../controllers/UsersCtrl.js'

// api 命名空间
const namespace = '/users'

export default (router) => {
    router
        // 访问地址：http://localhost:3030/api/doSignIn
        // 用户登录
        .post(namespace + '/sign/in', UsersCtrl.doSignIn)
        // 注册用户
        .post(namespace + '/sign/up', UsersCtrl.doSignUp)
        // 用户退出
        .post(namespace + '/sign/out', UsersCtrl.doSignOut)
        // 获取所有用户信息
        .get(namespace + '/list', UsersCtrl.getUsers)
        // 获取某一个用户信息
        .get(namespace + '/detail/:id', UsersCtrl.getUserById)
        // 更新某一个用户
        .post(namespace + '/update/:id', UsersCtrl.updateUserById)
        // 删除某一个用户
        .post(namespace + '/remove/:id', UsersCtrl.removeUserById)
        // TODO 批量删除用户
}