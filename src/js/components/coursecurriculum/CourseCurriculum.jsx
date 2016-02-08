import './coursecurriculum.scss';
import React from 'react'
import marked from 'marked';
import VideoPlayer from '../widget/videoplayer/VideoPlayer';

import HistoryService from '../../services/HistoryService';
import RestService from '../../services/RestService';

export default class Curriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                sections: [],
                user: {
                    avatar: 'default.png',
                    nameEn: ''
                }
            },
            video: ''
        };
    }

    componentDidMount() {
        this._loadCourse();
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

    _changeVdo(id, e) {
        e.preventDefault();
        this.setState({video: 'http://10.1.2.203/video-' + id + '_720p.m3u8'});
    }

    _loadCourse() {
        RestService
            .get('/api/course/basic/' + this.props.params.courseId)
            .done(function (data) {
                this.setState({data: data, video: 'http://10.1.2.203/video-' + data.sections[0].lectures[0].id + '_720p.m3u8'});
            }.bind(this));
    }

    render() {
        var self = this;
        var nodes = this.state.data.sections.map(function (main, index) {

            var subNodes = main.lectures.map(function (sub, subIndex) {
                return (
                    <li key={subIndex} className="curriculum-item-container">
                        <a className="curriculum-item clearfix" href="#" onClick={self._changeVdo.bind(self,sub.id)}>
                            <div className="ci-progress-container"></div>
                            <div className="ci-info">
                                <div className="ci-title">
                                    {sub.name}
                                </div>
                                <div className="ci-details-container clearfix">
                                    <span className="ci-details">
                                        <i className="fa fa-play-circle"></i> {sub.durationString}
                                     </span>
                                </div>
                            </div>
                        </a>
                    </li>
                );
            });

            return (
                <li key={index} className="curriculum-section-container">
                    <ul>
                        <li className="section-title">
                            <h5>{main.name}</h5>
                        </li>
                        {subNodes}
                    </ul>
                </li>
            );

        });

        var details = marked(this.state.data.details || '', {sanitize: true});
        var instructor = marked(this.state.data.user.instructor || '', {sanitize: true});
        return (
            <div className="curriculum">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                        <VideoPlayer url={this.state.video}/>
                        <div className="details" dangerouslySetInnerHTML={{__html: details}}></div>
                        <ul className="curriculum-items-list">{nodes}</ul>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="instructor-title">
                            Instructor
                        </div>
                        <div className="instructor-detail">
                            <img src={'/images/avatar/'+this.state.data.user.avatar}/>
                            <div className="instructor-name">{this.state.data.user.nameEn}</div>
                            <div className="instructor-profile" dangerouslySetInnerHTML={{__html: instructor}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
