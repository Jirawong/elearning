import React from 'react';
import HistoryService from '../../services/HistoryService';

export default class AdminConsole extends React.Component {

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
                    </ul>
                </div>
                <div className="form-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}