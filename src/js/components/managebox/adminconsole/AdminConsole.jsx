import React from 'react';
import HistoryService from '../../../services/HistoryService';
import RestService from '../../../services/RestService';

export default class AdminConsole extends React.Component {

    componentDidMount(){
        this._loadUser();
    }

    _loadUser() {
        RestService
            .get('/api/user')
            .done(function (data) {
                if (!(data.authorities[0].authority == 'Administrator')) {
                    HistoryService.get().pushState(null,'/');
                }
            });
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
            <div className="main">
                <div className="side-nav">
                    <ul>
                        <li>
                            <span>ADMIN CONSOLE</span>
                        </li>
                        <li>
                            <a href="/menu-manage" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-book"></i>Menu Manage</a>
                        </li>
                        <li>
                            <a href="/carousel" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-picture-o"></i>Carousel Images</a>
                        </li>
                        <li>
                            <span>User Manage</span>
                        </li>
                        <li>
                            <a href="/user-manage" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-users"></i>User Manage</a>
                        </li>
                        <li>
                            <a href="/add-user" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-users"></i>Add User</a>
                        </li>
                    </ul>
                </div>
                <div className="form-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
