/*eslint no-unused-vars: 0*/

import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'styles/app.scss';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from 'components/App';
import Header from 'components/header/Header';
import Content from 'components/content/Content';

ReactDOM.render((
    <Router history={createBrowserHistory()}>
        <Route component={App}>
            <Route path="/" component={Content} />
        </Route>
    </Router>
), document.getElementById('app'));