import React, { Component } from 'react'
import './index.scss'
import {GroupUser} from '../../../../modules/group'
import {Link} from 'react-router-dom'
class User extends Component{
    constructor(props){
        super(props)
        this.exit = this.exit.bind(this)
    }
    exit(){
        let {exitUser} = this.props
        exitUser()
    }
    render(){
        let {userInfo} = this.props
        let {go} = this.props.history
        return (
            <div className = "app-mine-box">
                <div className = "mine-box">
                    <img src="http://temp.im/466x466/4CD964/fff" alt=""/>
                    <h2>{ !userInfo || userInfo.username }</h2>
                    <a href="">0粉丝</a>
                    <a href="">1关注</a>
                    <Link to = "/login/loginto">
                        <button onClick = {this.exit} className = "exit" >注销</button>
                    </Link>
                    
               </div>
               <div className = "mine-tab">
                    <ul>
                        <li>采集</li>
                        <li>画板</li>
                        <li>赞</li>
                        <li>关注</li>
                    </ul>
               </div>
               
               <div className = "mine-show">mine-show</div>
               <div className = "mine-user">mine-user</div>
                
            </div>
        )
    }
}

export default GroupUser(User)