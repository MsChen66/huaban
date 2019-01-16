import React, { Component } from 'react';
import './index.scss'
import { Toast } from 'antd-mobile';
// import { Toast } from 'antd-mobile';

class LoginByUser extends Component {
    constructor(props){
        super(props)
        //绑定
        this.submit = this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        let {login} = this.props
        login({
            username: this.username.value,
            password: this.password.value,
            success(){
                Toast.success('Load success !!!', 1);
            },
            fail(){
                Toast.fail('Load failed !!!', 1);
            }
        })
    }
     render(){
        return(
            <div className = "app-loginUser-box">
               <form onSubmit = { this.submit } className = "login-form" >
                    <input ref = {el => this.username = el} type="text" placeholder ="账号" className = "username"/>
                    <input ref = {el => this.password = el} type="password" placeholder ="密码"  className = "psd"/>
                    <button className = "btn">登录</button>
                </form>
                <div className = "sign">
                    <span>还没有花瓣账号？</span>
                    <a href="/register">立即注册</a>
                </div>
            </div>
        )
            
        
    }
}



export default LoginByUser