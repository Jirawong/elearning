/*eslint no-unused-vars: 0*/

import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'styles/app.scss';
import 'jquery-ui/themes/smoothness/jquery-ui';

import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'jquery-ui/sortable';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {createHistory} from 'history'

import App from './components/App';
import CourseScreen from './components/coursescreen/CourseScreen';
import ManageBox from './components/managebox/ManageBox';
import CourseManage from './components/coursemanage/CourseManage';
import CourseCurriculum from './components/coursecurriculum/CourseCurriculum';
import CourseBasic from './components/coursebasic/CourseBasic';
import CourseVideo from './components/coursevideo/CourseVideo';
import AdminConsole from './components/adminconsole/AdminConsole';
import MenuManage from './components/menumanage/MenuManage';
import DashBoard from './components/dashboard/DashBoard';
import Curriculum from './components/curriculum/Curriculum';

import LoginAction from './actions/LoginAction';
import HistoryService from './services/HistoryService';

const history = createHistory();

HistoryService.set(history);

if (localStorage.getItem('access_token')) {
    LoginAction.checkToken();
}

ReactDOM.render((
    <Router history={history}>
        <Route component={App}>
            <Route path="/" component={CourseScreen}/>
            <Route path="/courses" component={CourseScreen}/>
            <Route component={ManageBox}>
                <Route path="/course-manage" component={CourseManage}>
                    <Route path="/course-curriculum/:courseId" component={CourseCurriculum}/>
                    <Route path="/course-basic/:courseId" component={CourseBasic}/>
                </Route>
                <Route path="/admin-console" component={AdminConsole}>
                    <Route path="/menu-manage" component={MenuManage} />
                </Route>
                <Route path="/instructor-dashboard" component={DashBoard}/>
                <Route path="/curriculum" component={Curriculum} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));