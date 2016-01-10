import './curriculum.scss';
import React from 'react'

export default class Curriculum extends React.Component {
    render() {
        return (
            <div className="curriculum">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="embed-responsive embed-responsive-16by9"> <iframe className="embed-responsive-item" src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe> </div>
                    </div>
                    <div className="col-xs-6">
                        <ul className="nav nav-tabs">
                          <li role="presentation" class="active"><a href="#">Discussions</a></li>
                          <li role="presentation"><a href="#">Announcements</a></li>
                          <li role="presentation"><a href="#">Messages</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <ul className="curriculum-items-list">
                            <li className="curriculum-section-container">
                                <ul>
                                    <li className="section-title">
                                        <h5>Section 1 Test Curriculumn</h5>
                                    </li>
                                    <li className="curriculum-item-container">
                                        <a className="curriculum-item clearfix">
                                            <div className="ci-progress-container"></div>
                                            <div className="ci-info">
                                                <div className="ci-title">
                                                    Lecture 1 : Unknow Lecture
                                                </div>
                                                <div className="ci-details-container clearfix">
                                                    <span className="ci-details">
                                                        <i className="fa fa-play-circle"></i> 10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="curriculum-section-container">
                                <ul>
                                    <li className="section-title">
                                        <h5>Section 2 Test Curriculumn</h5>
                                    </li>
                                    <li className="curriculum-item-container">
                                        <a className="curriculum-item clearfix">
                                            <div className="ci-progress-container"></div>
                                            <div className="ci-info">
                                                <div className="ci-title">
                                                    Lecture 2 : Unknow Lecture
                                                </div>
                                                <div className="ci-details-container clearfix">
                                                    <span className="ci-details">
                                                        <i className="fa fa-play-circle"></i> 10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="curriculum-item-container">
                                        <a className="curriculum-item clearfix">
                                            <div className="ci-progress-container"></div>
                                            <div className="ci-info">
                                                <div className="ci-title">
                                                    Lecture 3 : Unknow Lecture
                                                </div>
                                                <div className="ci-details-container clearfix">
                                                    <span className="ci-details">
                                                        <i className="fa fa-play-circle"></i> 10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="curriculum-item-container">
                                        <a className="curriculum-item clearfix">
                                            <div className="ci-progress-container"></div>
                                            <div className="ci-info">
                                                <div className="ci-title">
                                                    Lecture 4 : Unknow Lecture
                                                </div>
                                                <div className="ci-details-container clearfix">
                                                    <span className="ci-details">
                                                        <i className="fa fa-play-circle"></i> 10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="curriculum-item-container">
                                        <a className="curriculum-item clearfix">
                                            <div className="ci-progress-container"></div>
                                            <div className="ci-info">
                                                <div className="ci-title">
                                                    Lecture 5 : Unknow Lecture
                                                </div>
                                                <div className="ci-details-container clearfix">
                                                    <span className="ci-details">
                                                        <i className="fa fa-play-circle"></i> 10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="curriculum-item-container">
                                        <a className="curriculum-item clearfix">
                                            <div className="ci-progress-container"></div>
                                            <div className="ci-info">
                                                <div className="ci-title">
                                                    Lecture 6 : Unknow Lecture
                                                </div>
                                                <div className="ci-details-container clearfix">
                                                    <span className="ci-details">
                                                        <i className="fa fa-play-circle"></i> 10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-align-center"></div>
                </div>
            </div>
        );
    }
}
