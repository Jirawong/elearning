/*eslint no-unused-vars: 0*/

import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'styles/app.scss';

import 'bootstrap-sass/assets/javascripts/bootstrap';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {createHistory} from 'history'

import App from './components/App';
import Header from './components/header/Header';
import Content from './components/content/Content';

import LoginAction from './actions/LoginAction';
import HistoryService from './services/HistoryService';

const history = createHistory();

HistoryService.set(history);

if(localStorage.getItem('access_token')){
    LoginAction.checkToken();
}

ReactDOM.render((
    <Router history={history}>
        <Route component={App}>
            <Route path="/" component={Content} />
        </Route>
    </Router>
), document.getElementById('app'));