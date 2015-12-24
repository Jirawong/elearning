/*global $ */

import './header.scss';
import logo from '../../images/logo.png';

import React from 'react';

import AuthenService from '../../services/AuthenService';
import HistoryService from '../../services/HistoryService';

export default class Header extends React.Component {

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

    render() {
        return (
            <div className="header">
                <div className="header-inner flex-align-center">
                    <div className="flex-align-center flex">
                        <a className="browse-courses button-link button-link-btn no-underline on" href="#"
                           onClick={this._toggleMenu.bind(this)}>
                            <i className="fa fa-bars mr5"></i>Browse Courses
                        </a>

                        <div className="search-wrap">
                            <div className="search">
                                <form>
                                    <input type="text" placeholder="Search for Courses" autoComplete="off"
                                           className="search-input"/>
                                    <button type="submit" className="fa fa-search search-btn"></button>
                                </form>
                            </div>
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
                                    Admin
                                    <i className="fa fa-caret-down ml5"></i>
                                </a>
                            </div>
                            <ul className="dropdown-menu pull-right">
                                <li><a href="#"><i className="fa fa-user fa-al"></i>My Profile</a></li>
                                <li><a href="#"><i className="fa fa-graduation-cap fa-al"></i>My Courses</a></li>
                                <li><a href="#"><i className="fa fa-heart fa-al"></i>My Wishlist</a></li>
                                <li><a href="/coursemanage" onClick={this._changePage.bind(this)}><i className="fa fa-users fa-al"></i>Instructor Dashboard</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="fa fa-user-secret fa-al"></i>Admin Console</a>
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