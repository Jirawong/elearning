import './curriculum.scss';
import React from 'react'

import HistoryService from '../../services/HistoryService';
import RestService from '../../services/RestService';

export default class Curriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {sections: []},
            vdo: ''
        };
    }

    componentDidMount() {
        this._loadCourse();

        var $vid_obj = videojs('my-video');
        $vid_obj.ready(function(){
            $vid_obj.pause();
            $vid_obj.src([
                {
                    type: 'video/mp4',src:'http://52.77.227.171/'+this.state.data.sections[0].lectures[0].vdo
                }
            ]);
        });

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

    _changeVdo(index, subIndex, e) {
        e.preventDefault();
        var $vid_obj = videojs('my-video');
        $vid_obj.pause();
        $vid_obj.src([
            {
                type: 'video/mp4',src:'http://52.77.227.171/'+this.state.data.sections[index].lectures[subIndex].vdo
            }
        ]);
    }

    _loadCourse() {
        RestService
            .get('/api/course/basic/' + this.props.params.courseId)
            .done(function (data) {
                this.setState({data: data, vdo: data.sections[0].lectures[0].vdo});
            }.bind(this));
    }

    render() {
        var self = this;
        var nodes = this.state.data.sections.map(function (main, index) {

            var subNodes = main.lectures.map(function (sub, subIndex) {
                return (
                    <li key={subIndex} className="curriculum-item-container">
                        <a className="curriculum-item clearfix" href="#" onClick={self._changeVdo.bind(self,index,subIndex)}>
                            <div className="ci-progress-container"></div>
                            <div className="ci-info">
                                <div className="ci-title">
                                    {sub.name}
                                </div>
                                <div className="ci-details-container clearfix">
                                    <span className="ci-details">
                                        <i className="fa fa-play-circle"></i> 0:00
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
                    <div className="col-xs-6">

                        <video id="my-video" className="video-js" controls preload="auto" width="470" height="264" poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
                            <p className="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>

                    </div>
                    <div className="col-xs-6">

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <ul className="curriculum-items-list">
                            {nodes}
                        </ul>
                    </div>
                    <div className="col-xs-6 col-align-center"></div>
                </div>
            </div>
        );
    }
}
