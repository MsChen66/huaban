import React, { Component } from 'react';
import './index.scss'
import {GroupDetail} from '../../../modules/group'

const qs = require('querystring');

class Detail extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        let {getDetail} = this.props
        let {search} = this.props.location
        let urlObj = qs.parse(search.slice(1))
        getDetail(urlObj.id)
    }

    renderDetail(){
        let {detailData} = this.props
            // console.log(detailData)
            if(detailData){
                return(
                    <div className="mobile_pin_view">
                        <div className="mobile_pin_img">
                            <img src = 'http://placehold.it/388x702/'/>
                        </div>
                        <div className="info">
                            <p>{detailData.msg}</p>
                            <div className="sender">
                                <a className="user-header"><img src={"http://placehold.it/36x36/"}/></a>
                                <a className="name">{detailData.sender.username}</a>
                                <span className="album">收集到&nbsp;&nbsp;{detailData.album.name}</span>
                                <div className="pub-time">{detailData.add_datetime}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        
    }
    
    render(){
        return(
            <div className = "app-detail-box">
                { this.renderDetail() }
            </div>
        )
    }
}

export default GroupDetail(Detail)