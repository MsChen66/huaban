import * as type from './type'
const actionCreator = {
    templateFun(){
        let action = {
            type: type.TEMPLATE
        }
        return action
    },
    templateFun1(payload){
        let action = {
            type: type.TEMPLATE,
            payload
        }
        return action
    },
    getUserName(username){
        //用来获取username   本地存储
        return dispatch => {
            let action = {
                type: type.CHANGE_USERINFO,
                username
            }
            dispatch(action)
        }
    },
    loginUser({username,password,success,fail}){
        //登录   异步操作   ---》
            // -》 username  password  --->axios 请求后台  后台会返回结果   0  1 。。。 登录成功或是失败
            let name = 'lyj'
            let pass = '111'
            return dispatch => {
                setTimeout(()=>{
                    if( username === name && password === pass ){
                        let action = {
                            type: type.CHANGE_USERINFO,
                            username: username
                        }
                        dispatch(action)
                        if(success) success()
                        localStorage.setItem('username',username)
                        return false
                    }
                    if(fail) fail()
                },1000)
            }

    },
    loginPhone({phonenumber,codenumber,success,fail}){
        //登录   异步操作   ---》
            // -》 username  password  --->axios 请求后台  后台会返回结果   0  1 。。。 登录成功或是失败
            let phone = '18105637792'
            let code = '222'
            return dispatch => {
                setTimeout(()=>{
                if( phonenumber === phone && codenumber === code ){
                    let action = {
                        type: type.CHANGE_USERINFO,
                        username: phonenumber
                    }
                    dispatch(action)
                    if(success) success()
                    return false
                }
                if(fail) fail()
            },1000)
        }
    },
    exitUser(){
        let action = {
            type: type.EXIT_USERINFO,
            userInfo: null
        }
        return action
    }
}


export default actionCreator