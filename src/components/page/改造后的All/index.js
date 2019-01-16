import React, { Component } from 'react'
import './index.scss'
import AllNavs from './AllNavs';
import AllContent from './AllContent';
import {Route} from 'react-router-dom'
class All extends Component{
    constructor(props){
        super(props)
    
    }
    render(){
            return (
                <div  className = 'app-all-box'>
                    <AllNavs />
                    <AllContent />
                    {/* <Route  component = {AllContent}/> */}
                    
                </div>
            )
    }
}

export default All