/*eslint no-unused-vars: 0*/

import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'styles/app.scss';
import 'jquery-ui/themes/smoothness/jquery-ui';

import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'jquery-ui/sortable';

import 'flowplayer/dist/skin/functional';
import './plugin/quality-selector.js';
import './plugin/quality-selector.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import {createHistory} from 'history'

import App from './components/App';
import CourseScreen from './components/coursescreen/CourseScreen';
import ManageBox from './components/managebox/ManageBox';
import CourseManage from 'components/managebox/coursemanage/CourseManage';
import CourseCurriculum from 'components/managebox/coursemanage/coursecurriculum/CourseCurriculum';
import ImageCover from 'components/managebox/coursemanage/imagecover/ImageCover';
import CourseBasic from 'components/managebox/coursemanage/coursebasic/CourseBasic';
import CourseVideo from './components/coursevideo/CourseVideo';
import AdminConsole from 'components/managebox/adminconsole/AdminConsole';
import MenuManage from 'components/managebox/adminconsole/menumanage/MenuManage';
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
            <Route path="/category/:categoryId" component={CourseScreen}/>
            <Route component={ManageBox}>
                <Route path="/course-manage" component={CourseManage}>
                    <Route path="/course-curriculum/:courseId" component={CourseCurriculum}/>
                    <Route path="/course-basic/:courseId" component={CourseBasic}/>
                    <Route path="/image-cover/:courseId" component={ImageCover}/>
                </Route>
                <Route path="/admin-console" component={AdminConsole}>
                    <Route path="/menu-manage" component={MenuManage} />
                </Route>
                <Route path="/instructor-dashboard" component={DashBoard}/>
                <Route path="/curriculum/:courseId" component={Curriculum} />
                <Route path="/lecture/:lectureId" component={Curriculum} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));