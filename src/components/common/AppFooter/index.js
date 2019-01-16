import React, { Component } from 'react'
import './index.scss'
class AppFooter extends Component{
    constructor(props){
        super(props)
    }
    renderAppFooterNavs(){
        let {appFooterNavs} = this.props
        return (
            <ul>
                { appFooterNavs.map( item => {
                    return (
                        <li  key = {item.id}>
                            <a className = 'active'>
                                <i className = {'fa fa-'+item.icon}></i>
                                <span>{item.title}</span>
                            </a>
                        </li>
                        )
                    })}
            </ul>
        )
    }
    render(){
        return (
            <div className = 'app-footer-box'>
                { this.renderAppFooterNavs() }
            </div>
        )
    }
}
AppFooter.defaultProps = {
    appFooterNavs: [
        {
            id: 1, 
            title: '首页',
            icon: 'home'
        },
        {
            id: 2, 
            title: '列表',
            icon: 'list'
        },
        {
            id: 3, 
            title: '购物车',
            icon: 'shopping-cart'
        },
        {
            id: 4, 
            title: '我的',
            icon: 'user'
        },
    ]
}
export default AppFooter