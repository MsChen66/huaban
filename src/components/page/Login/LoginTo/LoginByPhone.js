import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import './index.scss'
class LoginByPhone extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        let {login} = this.props
        login({
            phonenumber: this.phone.value,
            codenumber: this.code.value,
            success(){
                Toast.success('Load success !!!', 1);
            },
            fail(){
                Toast.fail('Load failed !!!', 1);
            }
        })
    }
    render(){
        return (
            <div className = 'app-loginUser-box'>
                <form onSubmit = { this.submit }  className = "login-form">
                    <input  ref = {el => this.phone = el} type = 'text' placeholder = '手机号' className = 'phone'/>
                    <input ref = {el => this.code = el} type = 'password' placeholder = '验证码' className = 'code'/>
                    <button className = "btn">登录</button>
                </form>
                <div className = "sign">
                    <span>还没有花瓣账号？</span>
                    <a href="/">立即注册</a>
                </div>
            </div>
        )
    }
}

export default LoginByPhone