import React from 'react';
import HistoryService from '../../../services/HistoryService';

export default class UserProfile extends React.Component {

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
                            <span>USER PROFILE</span>
                        </li>
                        <li>
                            <a href="/user-profile" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-user"></i>Profile</a>
                        </li>
                        <li>
                            <a href="/user-avatar" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-picture-o"></i>Avatar</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <span>INSTRUCTOR PROFILE</span>
                        </li>
                        <li>
                            <a href="/instructor-profile" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-users"></i>Instructor</a>
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