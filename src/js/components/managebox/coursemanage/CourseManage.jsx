import './coursemanage.scss';

import React from 'react';

import HistoryService from '../../../services/HistoryService';

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
            <div className="main">
                <div className="side-nav">
                    <ul>
                        <li>
                            <span>COURSE CONTENT</span>
                        </li>
                        <li>
                            <a href={'/course-curriculum/'+this.props.params.courseId} className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-book"></i>Curriculum</a>
                        </li>
                        <li>
                            <a href={'/course-quiz/'+this.props.params.courseId} className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-question-circle"></i>Quiz</a>
                        </li>
                        <li>
                            <span>COURSE INFO</span>
                        </li>
                        <li>
                            <a href={'/course-basic/'+this.props.params.courseId} className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-cube"></i>Basic</a>
                        </li>
                        <li>
                            <a href={'/course-cover/'+this.props.params.courseId} className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-picture-o"></i>Image Cover</a>
                        </li>
                        <li>
                            <span>INSTRUCTOR</span>
                        </li>
                        <li>
                            <a href={'/course-instructor/'+this.props.params.courseId} className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-users"></i>Instructor</a>
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