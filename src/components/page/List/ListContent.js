import React, { Component } from 'react'
import {GroupList} from '../../../modules/group'
import {Link} from 'react-router-dom'
const qs = require('querystring');
class ListContent extends Component{
    constructor(props){
        super(props)
    }
   
    componentWillMount(){
        let {getContent} = this.props 
        let {search} = this.props.location 
        let urlObj = qs.parse(search.slice(1)) 
        getContent(urlObj.id,urlObj.path)
    }

    componentWillReceiveProps(props){
        if( props.location.search !== this.props.location.search){
            let {getContent} = this.props 
            let {search} = this.props.location 
            let urlObj = qs.parse(search.slice(1)) 
            getContent(urlObj.id,urlObj.path)
        }
    }
    renderItem(){
        let {listContent} = this.props 
        if( listContent ){
            return listContent.map( item => {
                return (
                    <li key = {item.id}>
                        <Link  className = 'img-box main-img' 
                            to={{
                                pathname: '/detail/001',
                                search: `?id=${item.id}`
                            }}
                        >
                            <img src = 'http://placehold.it/189x188/'/>
                            <p>{item.msg}</p>
                            <h5>
                                <i>★</i>
                                <span>{item['favorite_count']}</span>
                            </h5>
                        </Link>
                        <div className = 'user-info'>
                            <div className = 'user-header'>
                                <img src="http://placehold.it/30x30/" />  
                                <div className = 'user-name'>
                                    <h3>{item.sender.username}</h3>
                                    <h4>收集到 {item.album.name}</h4>
                                </div> 
                            </div>
                            
                        </div>
                    </li>
                )
            })
        }
    }
    render(){
        return (
            <div className = 'list-content-box mobile'>
                <section>
                    <ul>
                        {this.renderItem()}
                    </ul>
                </section>
            </div>
        )
    }
}

export default GroupList(ListContent)