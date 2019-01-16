import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class ListNav extends Component{
    constructor(props){
        super(props)
        //all的开关设置
        this.state = {buttonAllReorderFlag: false};
        this.buttonAllReorder = this.buttonAllReorder.bind(this);
    }

    
    buttonAllReorder(){
        this.setState(prevState => ({
            buttonAllReorderFlag: !prevState.buttonAllReorderFlag
          }));
    }

    renderAllNavs(){
        let { data } = this.props
        if( data ){
        return(
            <ul className="Navs">
                { data.map( item => {
                    return(
                        <li key = {item.id}>
                        <Link 
                            to = {{
                                pathname: '/list/001',
                                search: `?id=${item.id}&path=${item.path}`
                            }}
                        >{item.name}</Link>
                    </li>
                    )
                })}
            </ul>
            )
        }
    }   

    render(){
        return (
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

export default ListNav