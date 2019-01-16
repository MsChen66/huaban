import React, { Component } from 'react'
import './index.scss'

import LoginByUser from './LoginByUser';
import LoginByPhone from './LoginByPhone';

import {GroupUser} from '../../../../modules/group';

class LoginTo extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'user'
        }
    }
    renderLogin(){
        let {type}  = this.state
        let {loginUser,loginPhone} = this.props
        let loginType = 'phone'

        let Form = LoginByUser
        let login = loginUser 
        if( type !== 'user'){
            loginType = 'user'
            Form = LoginByPhone
            login = loginPhone
        }

        let handlerClick = () => {
            this.setState({
                type: loginType
            })
        }
        return (
            <div>
                
                <ul>
                    <li className= 'login-content' onClick = {handlerClick}>
                        {type === 'user'?'用户名密码':'手机验证码'}登录
                    </li>
                    <li className = "user" onClick = {handlerClick}>
                        {type == 'user'?'手机验证码': '用户名密码'}登录
                    </li>
                </ul>
                <Form login = {login}/>
            </div>
        )
    }
    render(){
        let {go} = this.props.history   

        let {type} = this.state
        return (
            <div className = 'app-loginTo-box'>
                {this.renderLogin()}
            </div>
        )
    }
}

export default GroupUser(LoginTo)