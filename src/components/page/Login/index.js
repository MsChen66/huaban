import React, { Component } from 'react'
import './index.scss'


import {GroupUser} from './../../../modules/group';

import LoginTo from './LoginTo'
import User from './User'

import {Route} from 'react-router-dom'

class Login extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.checkUserInfo()
    }
    //props的变化使用哪个生命周期钩子可以看到
    componentWillReceiveProps(props){
        let {pathname} =  props.location
        //判断login哪个登录按钮是否被点击
        if(pathname === this.props.location.pathname){
            this.checkUserInfo(props)
        }
    }
    checkUserInfo(props){
        let {userInfo}  = (props||this.props)
        let {replace}  = this.props.history
        if( userInfo ){
            //编程时导航
            replace('/login/user')
        }else{
            replace('/login/loginto')
        }
    }
    render(){
        return (
            <div className = 'app-login-box'>
                <Route path = '/login/loginto' component = {LoginTo}/>
                <Route path = '/login/user' component = {User}/>
            </div>
        )
    }
}

export default GroupUser(Login)