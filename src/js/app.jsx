//import React from 'react';
//import Router,{Route} from 'react-router';
//import Header from 'components/header/Header';
//import Content from 'components/content/Content'
//
//var routes = (
//    <Route path="/" handler={Header}>
//        <Route path="context" handler={Content}/>
//    </Route>
//);
//
//var router = Router.create({routes});
//
//router.run(function (Handler) {
//    React.render(<Handler />, document.getElementById('content'));
//});

import 'normalize.css'
import 'font-awesome/scss/font-awesome.scss';
import 'styles/app.scss';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Header from 'components/header/Header';
import Content from 'components/content/Content';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/inbox/messages/1">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || 'Welcome to your Inbox'}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

ReactDOM.render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Header}>
            <Route component={Content} />
            <Route path="about" component={About}/>
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));