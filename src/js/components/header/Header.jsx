import './header.scss';

import React from 'react';

import AuthenService from '../../services/AuthenService';

class Header extends React.Component {

    _logout(e){
        e.preventDefault();
        AuthenService.logout()
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Mitrphol</a>
                    </div>

                    <div className="collapse navbar-collapse">

                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </form>

                        <ul className="nav navbar-nav navbar-right">
                            <li role="presentation" className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Admin <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a onClick={this._logout.bind(this)} href="#">
                                            <i className="fa fa-fw fa-power-off" /> Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li className="active">
                                <a href="index.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
                            </li>
                            <li>
                                <a href="charts.html"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</a>
                            </li>
                            <li>
                                <a href="tables.html"><i className="fa fa-fw fa-table"></i> Tables</a>
                            </li>
                            <li>
                                <a href="forms.html"><i className="fa fa-fw fa-edit"></i> Forms</a>
                            </li>
                            <li>
                                <a href="bootstrap-elements.html"><i className="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
                            </li>
                            <li>
                                <a href="bootstrap-grid.html"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
                            </li>
                            <li>
                                <a href="javascript:;" data-toggle="collapse" data-target="#demo" className="collapsed" aria-expanded="false"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></a>
                                <ul id="demo" className="collapse" aria-expanded="false" style={{height: '0px'}}>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blank-page.html"><i className="fa fa-fw fa-file"></i> Blank Page</a>
                            </li>
                            <li>
                                <a href="index-rtl.html"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;