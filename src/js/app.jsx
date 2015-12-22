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
import CourseScreen from './components/coursescreen/CourseScreen';
import CourseManage from './components/coursemanage/CourseManage';

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
            <Route path="/" component={CourseScreen} />
            <Route path="/courses" component={CourseScreen} />
            <Route path="/course-manage" component={CourseManage} />
        </Route>
    </Router>
), document.getElementById('app'));