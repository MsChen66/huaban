import React, { Component } from 'react';
import './index.scss'






class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:" ",
            pwd:" ",
    }
    // this.handleRegister = this.handleRegister.bind(this)

    }

    render(){
        return(
            <div className = "app-register-box">
               <form className = "reg-form" >
                    <input type="text" placeholder ="账号" name ="phone" className = "phone"/>
                    <input type="text" placeholder ="密码" name ="psd" className = "psd"/>
                    <a href="" className = "btn">
                        <span className = "text">注册</span>
                    </a>
                </form>
                <div className = "sign">
                    <span>已有有花瓣账号？</span>
                    <a href="/Login/Loginto">立即登录</a>
                </div>
            </div>
        )
            
        
    }
}



export default Register