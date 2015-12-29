import React from 'react';

export default class AdminConsole extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="side-nav">
                    <ul>
                        <li>
                            <span>ADMIN CONSOLE</span>
                        </li>
                        <li>
                            <a href="#" className="no-underline"><i className="fa fa-book"></i>Menu Manage</a>
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