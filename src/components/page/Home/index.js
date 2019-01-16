import React, { Component } from 'react'
import './index.scss'
import {GroupHome} from '../../../modules/group'
class Home extends Component{
    constructor(props){
        super(props)
        this.more = this.more.bind(this)
    }
    componentWillMount(){
        let {getList} = this.props 
        getList(12)
    }
    renderRecommendInfo(){
        let { appRecommendInfo } = this.props
        // console.log(appRecommendInfo)
        return (
            <div className="recommend-info">
                { appRecommendInfo.map( item => {
                    return (   
                            <a href={"/explore/"+ item.icon + "/"} title={item.title } className="category-item" key={item.id}>
                                <img src={'http://hbimg.b0.upaiyun.com/' + item.imgsrc +'.png'}/>
                                <div className="category-title"> {item.title} </div>
                            </a>
                        )
                    })}
        </div>     
        )
    }
    renderRecommendItems(){
        let { lists } = this.props
        // console.log(appRecommendItems)
        if(lists){
            return lists.map( (item,index) => {
                    return (   
                            <div  key={index} className={index%2==0 ? "l-l" : "l-s" }>
                                    <a href="/boards/3302645/">
                                        <img src='http://placehold.it/466x466/'  className="recommend-bg "/>
                                    </a>
                                    <div className="recommend-content ">
                                        <div className="recommend-tra">
                                        </div>
                                        <div className="recommend-type boards"></div>
                                        <h2 className="recommend-title">
                                            <a href="/boards/3302645/">{item.title}</a>
                                        </h2>
                                        <div className="recommend-data">
                                            <span>{item.pin_count} 采集</span><span>{item.follow_count} 粉丝</span>
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
    }

    more(){
        let {getList} = this.props 
        getList(24)
    }
    wheel(){
        window.onscroll(function(){
            let {getList} = this.props 
            getList(36)
        })
    }

    render(){
        return (
            <div className = 'app-home-box'>
                <div className="recommend-line"><a>大家正在关注</a></div>
                { this.renderRecommendInfo() }
                <div className="recommend-line"><a>为您推荐</a></div>
                <div className="recommend-items recommend-info clearfix">
                <div className="recommend-item">{ this.renderRecommendItems() }</div>
                    
                </div>

                <div className="get-more-line" onClick = {this.more} ><a>加载更多</a></div>



            </div>
        )
    }
}
Home.defaultProps = {
    appRecommendInfo: [
        {
            id: 1, 
            title: '披萨',
            icon: 'pisa',
            imgsrc: '660991b05c189cd5e3a955cb09bb8e394f9cb0353e016-yoY1Bm_sq236bl4'
        },
        {
            id: 2, 
            title: '森林',
            icon: 'forest',
            imgsrc: '9d0905ae4b61bd1449512523722c27484d4cb0d123e44-jRHbW4_sq236bl4'
        },
        {
            id: 3, 
            title: '书房',
            icon: 'shufang',
            imgsrc: 'a53771570ac40f0a1814c2927e9242364a38bc71181d3-Ly52gf_sq236bl4'
        },
        {
            id: 4, 
            title: '二维码名片',
            icon: 'erweimamingpian',
            imgsrc: 'f9840ba29c5c37c460b8d843cf2eba36673ba2c6cab07-y6qWYI_sq236bl4'
        },
        {
            id: 5, 
            title: '手机菜单界面',
            icon: 'shoujicaidanjiemian',
            imgsrc: '459508e4fbbbfdf489b5879c95c07537d72913132a1c9-bLFkVN_sq236bl4'
        },
        {
            id: 6, 
            title: '圣诞插画',
            icon: 'shengdanchahua',
            imgsrc: 'f5dbddda82e10abf41ed9327c785a6e0608056a053a15-Iahtvv_sq236bl4'
        },
    ],
}
export default GroupHome(Home)