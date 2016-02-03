import './curriculum.scss';
import React from 'react'
import VideoPlayer from '../widget/videoplayer/VideoPlayer';

import HistoryService from '../../services/HistoryService';
import RestService from '../../services/RestService';

export default class Curriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {sections: []},
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
        this.setState({video:'http://10.1.2.203/video-'+id+'_720.m3u8'});
    }

    _loadCourse() {
        RestService
            .get('/api/course/basic/' + this.props.params.courseId)
            .done(function (data) {
console.log(data);
                this.setState({data: data, video: 'http://10.1.2.203/video-'+data.sections[0].lectures[0].id+'_480.m3u8'});
            }.bind(this));
    }

    render() {
        console.log(this.state.data);
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
        return (
            <div className="curriculum">
                <div className="row">
                    <div className="col-xs-8">

                        <VideoPlayer url={this.state.video} />

                    </div>
                    <div className="col-xs-4">

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-8">
                        <pre className="details">
                            {this.state.data.details}
                        </pre>
                        <ul className="curriculum-items-list">
                            {nodes}
                        </ul>
                    </div>
                    <div className="col-xs-4 col-align-center"></div>
                </div>
            </div>
        );
    }
}
