/*global $ */

import './contentheader.scss';
import logo from '../../images/logo.png';

import React from 'react';

import AuthenService from '../../services/AuthenService';
import HistoryService from '../../services/HistoryService';
import RestService from '../../services/RestService';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        this._loadUser();
    }

    _logout(e) {
        e.preventDefault();
        AuthenService.logout()
    }

    _toggleMenu(e) {
        e.preventDefault();
        if ($('.browse-courses').is('.on')) {
            $('.browse-courses').removeClass('on');
            $('.content').addClass('hide-wrapper-left');
        } else {
            $('.browse-courses').addClass('on');
            $('.content').removeClass('hide-wrapper-left');
        }
    }

    _changePage(e) {
        e.preventDefault();
        HistoryService
            .get()
            .pushState(
                null,
                e.currentTarget.getAttribute('href')
            );
    }

    _loadUser() {
        var self = this;
        RestService
            .get('/api/user')
            .done(function (data) {
                self.setState({data: data});
            });
    }

    render() {
        if (!this.state.data.username) {
            return (<div></div>);
        }

        var menuToggle = ($(window).width() > 480) ? 'on' : '';

        return (
            <div className="header">
                <div className="header-inner flex-align-center">
                    <div className="flex-align-center flex">
                        <a className={'browse-courses button-link button-link-btn no-underline '+menuToggle} href="#" onClick={this._toggleMenu.bind(this)}>
                            <i className="fa fa-bars mr5"></i><span className="browse-course">Browse Courses</span>
                        </a>

                        <div className="search-wrap">
                            <div className="search">
                                <form>
                                    <input type="text" placeholder="Search for Courses" autoComplete="off" className="search-input"/>
                                    <button type="submit" className="fa fa-search search-btn"></button>
                                </form>
                            </div>
                        </div>

                        <div className="search-dropdown">
                            <i className="fa fa-search"></i>
                        </div>
                    </div>
                    <a href="/" onClick={this._changePage.bind(this)}>
                        <img src={logo}/>
                    </a>

                    <div className="flex flex-align-center flex-justify">
                        <div className="btn-group">
                            <div className="dropdown-toggle flex-align-center" data-toggle="dropdown"
                                 aria-expanded="true">
                                <a className="button-link button-link-btn no-underline" href="#">
                                    <span className="username">{this.state.data.nameEn}</span><i className="fa fa-caret-down ml5"></i>
                                </a>
                            </div>
                            <ul className="dropdown-menu pull-right">
                                <li><a href="/user-profile" onClick={this._changePage.bind(this)}><i className="fa fa-user fa-al"></i>My Profile</a></li>
                                <li><a href="/wishlist" onClick={this._changePage.bind(this)}><i className="fa fa-heart fa-al"></i>My Wishlist</a></li>
                                <li><a href="/instructor-dashboard" onClick={this._changePage.bind(this)}><i className="fa fa-users fa-al"></i>Instructor Dashboard</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="/admin-console" onClick={this._changePage.bind(this)}><i className="fa fa-user-secret fa-al"></i>Admin Console</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="#" onClick={this._logout.bind(this)}><i className="fa fa-power-off fa-al"></i>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}