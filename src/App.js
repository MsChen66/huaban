import React, { Component } from 'react';

import {Home,List,Detail,Mine,Login,Register} from './components/page'
//Vue里面是有个路由表，但是ract这边没有路由的全局配置，所以他没有路由表，但是react-router-dom提供了一个路由工具Route

import { Route,Switch } from 'react-router-dom'
import AppHeader from './components/common/AppHeader/index';

// import AppFooter from './components/common/AppFooter/index';

//Route就是一个展示区
class App extends Component {
  // exact的意思是完全匹配
  // Switch的意思是一次只渲染一个
  renderRoutes(){
    let { routes } = this.props
    return routes.map( item => <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact}/>)
  }
  render() {
    return (
      <div className="App">
          <AppHeader/>
          <Switch>
            { this.renderRoutes() }
          </Switch> 
          {/* <AppFooter/> */}
      </div>
    );
  }
}

//es react 组件默认属性如何定义
App.defaultProps = {
  routes: [
    {
      id: 1, 
      path: '/',
      component: Home,
      exact: true
    },
    {
      id: 2, 
      path: '/home',
      component: Home,
      exact: true
    },
    {
      id: 3, 
      path: '/list',
      component: List
    },
    {
      id: 4, 
      path: '/mine',
      component: Mine
    },
    {
      id: 5, 
      path: '/detail',
      component: Detail
    },
    {
      id: 6, 
      path: '/login',
      component: Login
    },
    {
      id: 7, 
      path: '/register',
      component: Register
    },
  ]  
}

export default App;
