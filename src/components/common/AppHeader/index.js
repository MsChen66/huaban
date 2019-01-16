import React, { Component } from 'react'
import './index.scss'

//引入antd-mobile的searchBar组件
import { SearchBar, WhiteSpace,Menu, ActivityIndicator, NavBa } from 'antd-mobile';
import { Link } from 'react-router-dom';
class AppHeader extends Component{
    constructor(props){
        super(props)

        //header-button-list的开关设置
        this.state = {buttonReorderFlag: false};
        this.buttonReorder = this.buttonReorder.bind(this);
    }

    //header-button-list的单击事件
    buttonReorder(){
        this.setState(prevState => ({
            buttonReorderFlag: !prevState.buttonReorderFlag
          }));
    }

    //header-button-list的开关控制是否渲染
    renderAppHeaderMenu(){
        return(
            <div className="header-menu">
                    <div className="inner">
                        <div className="line login">
                            <a href="/login" className="signup-button btn rbtn">
                                <span className="text"> 注册
                                </span>
                            </a>
                            <a href="/register" className="login-button btn">
                                <span className="text"> 登录</span>
                            </a>
                        </div>
                        { this.renderAppHeaderNavs() }
                        <div className="line pc-btns">
                            <a className="to to-pc">访问电脑版</a>
                            <a href="/interface/get-huaban-app/" target="_blank" className="to to-app">下载客户端</a>
                        </div>
                    </div>
                </div>
        )
    }

    renderAppHeaderNavs(){
        let {appHeaderNavs} = this.props
        return (
            <div>
                { appHeaderNavs.map( item => {
                    return (
                        <div className="line "  key = {item.id}>
                            {/* <a href={item.icon}> </a> */}
                            <Link to={"/" + item.togo}>{item.title} </Link>
                            <i className="arrow"> &gt; </i>
                        </div>
                        )
                    })}
            </div>
        )
    }
    render(){
        return (
            <div className = 'app-header-box'>
            <div className="header">
                <div className="header-logo">
                    <a href="/" className="header-icon-logo" ><img src="http://huaban.com/img/mobile/2x/huaban_logo.png" /></a>
                    <div className="mobile-title">发现</div>
                </div>
                <div className="header-button search">
                    {/* <i className="fa fa-search"></i> */}
                    <SearchBar placeholder="搜索您喜欢的" ref={ref => this.autoFocusInst = ref} />
                 <WhiteSpace />
                </div>
                <a className="header-button-list" onClick={ this.buttonReorder } ><i className={this.state.buttonReorderFlag ?  "fa fa-times" : "fa fa-reorder "}></i></a>
                {/* 是否渲染 */}
                {this.state.buttonReorderFlag ?  this.renderAppHeaderMenu() : ''} 
            </div>
            </div>
        )
    }
}

AppHeader.defaultProps = {
    appHeaderNavs: [
        {
            id: 1, 
            title: '最新',
            icon: 'list',
            togo: 'list'
        },
        {
            id: 2, 
            title: '热门',
            icon: 'popular'
        },
        {
            id: 3, 
            title: '发现',
            icon: 'discovery'
        },
    ],
   
}
export default AppHeader