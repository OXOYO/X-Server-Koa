/**
 * Created by yangfan on 2017/1/8.
 *
 * Users 路由
 */

import UsersCtrl from '../controllers/UsersCtrl.js'

export default (router) => {
    router
        // 访问地址：http://localhost:3030/api/doSignIn
        // 用户登录
        .post('/doSignIn', UsersCtrl.doSignIn)
        // 注册用户
        .post('/doSignUp', UsersCtrl.doSignUp)
        // 获取所有用户信息
        .get('/getUsers', UsersCtrl.getUsers)
        // 获取某一个用户信息
        .get('/getUserById/:id', UsersCtrl.getUserById)
        // 更新某一个用户
        .post('/updateUserById/:id', UsersCtrl.updateUserById)
        // 删除某一个用户
        .post('/removeUserById/:id', UsersCtrl.removeUserById)
}