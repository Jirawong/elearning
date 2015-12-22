import './coursemanage.scss';

import React from 'react';

export default class CourseManage extends React.Component {
    render() {
        return (
            <div className="course-manage margin-20a">
                <div className="row">
                    <div className="col-xs-12 col-align-center">
                        <div className="main">
                            <div className="side-nav">
                                <ul>
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
                                        <a href="#" className="no-underline"><i className="fa fa-file-video-o"></i>Course Video</a>
                                    </li>
                                    <li>
                                        <a href="#" className="no-underline"><i className="fa fa-question"></i>Quiz</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-wrapper">
                                <form>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}