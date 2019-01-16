import React from 'react';
import ReactDOM from 'react-dom';

//引入rem

import './modules/rem'

//引入全局的公共样式
import './stylesheets/main.scss'

import App from './App';
import * as serviceWorker from './serviceWorker';

//使用react组件库  antd-mobile 引入样式
import 'antd-mobile/lib/date-picker/style/css';

//引入路由
import { BrowserRouter as Router } from 'react-router-dom'
//BroserRouter需要做后台配置

//引入redux   Previder 
import store from './store'
import {Provider} from 'react-redux'
import { Component } from 'react'


//使用axios
import axios from 'axios'
Component.prototype.$http = axios


ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
