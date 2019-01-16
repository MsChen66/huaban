import React, { Component } from 'react';
import './index.scss'
import { Link } from 'react-router-dom'

class AllNavs extends Component {
    constructor(props){
        super(props)
        //all的开关设置
        this.state = {buttonAllReorderFlag: false};
        this.buttonAllReorder = this.buttonAllReorder.bind(this);
    }

    //All的单击事件
    buttonAllReorder(){
        this.setState(prevState => ({
            buttonAllReorderFlag: !prevState.buttonAllReorderFlag
          }));
    }

    renderAllNavs(){
        let { allNavs } = this.props
        return(
            <ul>
                { allNavs.map( item => {
                    return(
                        <li key = { item.id }>
                            <Link to={'/all/' + item.goto1 }> { item.title }</Link>
                            <Link to={'/all/' + item.goto2 }> { item.content }</Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
    // http://huaban.com/all/?max=2229282007&limit=20&wfl=1

    render(){
        return(
                <div>
                    <div  className = "all-item" onClick={ this.buttonAllReorder }>
                        全部分类
                        <i className={this.state.buttonAllReorderFlag ? "fa fa-angle-up" :  "fa fa-angle-down"} ></i>
                    </div>
                    <div>
                        {this.state.buttonAllReorderFlag ?  this.renderAllNavs() : ''}
                    </div>
                </div>
        )         
    }
}


AllNavs.defaultProps = {
    allNavs: [
       {
        id:1,
        title: '全部',
        content:'UI/UX',
        goto2:'web_app_icon'
       },
       {
        id:2,
        title: '平面',
        content:'插画/漫画',
        goto1:'design',
        goto2:'illustration',
       },
       {
        id:3,
        title: '家居/家装',
        content:'女装/搭配',
       },
       {
        id:4,
        title: '男士/风尚',
        content:'婚礼'
       },
       {
        id:5,
        title: '工业设计',
        content:'摄影'
       },
       {
        id:6,
        title: '造型/美妆',
        content:'美食'
       },
       {
        id:7,
        title: '旅行',
        content:'手工/布艺'
       },
       {
        id:8,
        title: '健身/舞蹈',
        content:'儿童'
       },
       {
        id:9,
        title: '宠物',
        content:'美图'
       },
       {
        id:10,
        title: '明星',
        content:'美女'
       },
       {
        id:11,
        title: '礼物',
        content:'极客'
       },
       {
        id:12,
        title: '人体艺术',
        content:'数据图'
       },
       {
        id:13,
        title: '动漫',
        content:'建筑设计'
       },
       {
        id:14,
        title: '游戏',
        content:'汽车/摩托'
       }
    ]
}


export default AllNavs