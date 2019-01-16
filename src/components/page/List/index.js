import React, { Component } from 'react'
import './index.scss'
import ListNav from './ListNav';
import ListContent from './ListContent';
import {Route} from 'react-router-dom'
import {GroupList} from '../../../modules/group'
const qs = require('querystring');

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            path: 0
        }
    }
    componentWillMount(){
        // axios    === >  this.$http
        let {getNavs,getContent} = this.props 
        getNavs()
        let {search} = this.props.location 
        let urlObj = qs.parse(search.slice(1)) 
        this.setState({
            id: urlObj.id,
            path: urlObj.path
        })
    }

    render(){
        let { listNavs,listContent } = this.props
        let {id,path} = this.state
            return (
                <div  className = 'app-list-box'>
                    
                    <ListNav data = {listNavs}/>
                    <Route path = '/list/:id' component = {ListContent}/>
                </div>
            )
    }
}

export default GroupList(List)