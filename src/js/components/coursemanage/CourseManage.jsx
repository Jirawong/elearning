import './coursemanage.scss';

import React from 'react';

import HistoryService from '../../services/HistoryService';

export default class CourseManage extends React.Component {

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
            <div className="course-manage margin-20a">
                <div className="row">
                    <div className="col-xs-12 col-align-center">
                        <div className="main">
                            <div className="side-nav">
                                <ul>
                                    <li>
                                        <span>COURSE CONTENT</span>
                                    </li>
                                    <li>
                                        <a href="#" className="no-underline"><i className="fa fa-book"></i>Curriculum</a>
                                    </li>
                                    <li>
                                        <span>COURSE INFO</span>
                                    </li>
                                    <li>
                                        <a href="#" className="no-underline"><i className="fa fa-cube"></i>Basic</a>
                                    </li>
                                    <li>
                                        <a href="#" className="no-underline"><i className="fa fa-exchange"></i>Course Summary</a>
                                    </li>
                                    <li>
                                        <a href="#" className="no-underline"><i className="fa fa-picture-o"></i>Image Cover</a>
                                    </li>
                                    <li>
                                        <a href="/coursevideo" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-file-video-o"></i>Course Video</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-wrapper">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}