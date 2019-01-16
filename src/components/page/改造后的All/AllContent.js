import React, { Component } from 'react';
import './index.scss'
import {GroupAll} from '../../../modules/group'

class AllContent extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        let { getAllList } = this.props 
        getAllList()
    }

    // http://huaban.com/all/?max=2229282007&limit=20&wfl=1

    renderWaterfall(){
        let { alllists } = this.props
            return alllists.map( (item,index) => {
                    return (   
                            <div  key={index} className="pin-item wfc" >
                                <a className="main-img">
                                    <img src='http://placehold.it/189x188/' />
                                </a>
                                <div className="info">
                                    <div className="description">{item.title}</div>
                                </div>
                                <div className="author">
                                    <a href="" className="img x">
                                        <img src="http://placehold.it/27x27/" className="avt" />
                                    </a>
                                    <div className="text">
                                        <div className="inner">
                                            <a href="" className="name">作者：{item.title}</a>
                                            <a href="/boards/32659795/">扒不下来{index}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        )
                    })
                }
    

    render(){
        return(
                <div className="mobile">
                    { this.renderWaterfall() }
                </div>
        )         
    }
}

export default GroupAll(AllContent)