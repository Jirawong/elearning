import './menu.scss';

import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="btn-group cats-dropdown">
                <div className="dropdown-menu">
                    <ul className="dropdown-menu-list">
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Cane Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin1">
                                <div className="flex-direction-column h100p">
                                    <h4>Cane Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การจัดการฟาร์มสมัยใหม่
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Sugar Product Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin2">
                                <div className="flex-direction-column h100p">
                                    <h4>Sugar Product Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การจัดการฟาร์มสมัยใหม่
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Energy Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin3">
                                <div className="flex-direction-column h100p">
                                    <h4>Energy Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การจัดการฟาร์มสมัยใหม่
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Marketing Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin4">
                                <div className="flex-direction-column h100p">
                                    <h4>Marketing Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การจัดการฟาร์มสมัยใหม่
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Financial Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin5">
                                <div className="flex-direction-column h100p">
                                    <h4>Financial Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การจัดการฟาร์มสมัยใหม่
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}