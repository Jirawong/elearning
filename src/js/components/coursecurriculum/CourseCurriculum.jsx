import './coursecurriculum.scss';
import React from 'react'
import marked from 'marked';
import VideoPlayer from '../widget/videoplayer/VideoPlayer';
import ViewerJs from '../widget/viewerjs/ViewerJs';
import Rating from '../widget/rating/Rating';
import Quiz from '../widget/quiz/Quiz';
import If from '../widget/if/If';

import HistoryService from '../../services/HistoryService';
import RestService from '../../services/RestService';

export default class Curriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                sections: [],
                topics: [],
                instructors: [],
                creator: {
                    avatar: 'default.png',
                    nameEn: ''
                }
            },
            content: '',
            contentData: {},
            contentType: ''
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

    _changeContent(data, e) {
        e.preventDefault();
        this.setState({content: this._contentSelector(data), contentData: data, contentType: data.contentType});
    }

    _loadCourse() {
        var self = this;
        RestService
            .get('/api/course/basic/' + this.props.params.courseId)
            .done(function (data) {
                this.setState({data: data, content: self._contentSelector(data.sections[0].lectures[0]), contentData: data.sections[0].lectures[0], contentType: data.sections[0].lectures[0].contentType});
            }.bind(this));
    }

    _contentSelector(data) {
        if (data.contentType == 'VIDEO') {
            return data.id;
        } else if (data.contentType == 'PDF') {
            return data.id + '-' + data.content;
        } else {
            return data.id + '-' + data.content;
        }
    }

    _postTopic(e) {
        e.preventDefault();
        var self = this;
        var data = {
            course: this.state.data.id,
            message: this.refs.topic.value
        };

        if (this.refs.topic.value !== '') {
            RestService
                .post('/api/savetopic', data)
                .done(function (data) {
                    self.setState({data: data});
                    self.refs.topic.value = ''
                });
        }
    }

    _postReply(topic, e) {
        e.preventDefault();
        var self = this;
        var data = {
            course: this.state.data.id,
            topic: topic,
            message: $('#reply-' + topic).val()
        };

        if ($('#reply-' + topic).val() !== '') {
            RestService
                .post('/api/savereply', data)
                .done(function (data) {
                    self.setState({data: data});
                    $('#reply-' + topic).val('')
                });
        }
    }

    _toogleReply(topic, e) {
        e.preventDefault();
        $('#reply-box-' + topic).toggleClass('hide');
    }

    render() {
        if (!this.state.data.id) {
            return (<div></div>)
        }
        var self = this;
        var nodes = this.state.data.sections.map(function (main, index) {

            var subNodes = main.lectures.map(function (sub, subIndex) {

                var content;
                var detail;
                if (sub.contentType == 'VIDEO') {
                    content = (<i className="fa fa-play-circle"></i>);
                    detail = sub.durationString;
                } else if (sub.contentType == 'PDF') {
                    content = (<i className="fa fa-file-pdf-o"></i>);
                    detail = 'PDF';
                }

                return (
                    <li key={subIndex} className="curriculum-item-container">
                        <a className="curriculum-item clearfix" href="#" onClick={self._changeContent.bind(self,sub)}>
                            <div className="ci-progress-container">
                                <If test={sub.view}>
                                    <span className="ci-progress-mask"></span>
                                </If>
                            </div>
                            <div className="ci-info">
                                <div className="ci-title">
                                    {sub.name}
                                </div>
                                <div className="ci-details-container clearfix">
                                    <span className="ci-details">
                                        {content} {detail}
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

        var topics = this.state.data.topics.map(function (topic, index) {
            var replys = topic.replys.map(function (reply, subIndex) {
                return (
                    <div className="row" key={subIndex}>
                        <div className="col-xs-2"></div>
                        <div className="col-xs-10">
                            <div className="reply">
                                <div className="row">
                                    <div className="col-xs-2 col-lg-1 no-padding">
                                        <img src={'/images/avatar/'+reply.user.avatar}/>
                                    </div>
                                    <div className="col-xs-10 col-lg-11 no-padding vcenter">
                                        <span className="topic-header">{reply.user.nameEn}</span>
                                        <span className="topic-postdate"> Reply {reply.createDate}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 vcenter">
                                        {reply.message}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });

            return (
                <div key={index}>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="topic">
                                <div className="row">
                                    <div className="col-xs-2 col-lg-1 no-padding">
                                        <img src={'/images/avatar/'+topic.user.avatar}/>
                                    </div>
                                    <div className="col-xs-10 col-lg-11 no-padding vcenter">
                                        <span className="topic-header">{topic.user.nameEn} </span>
                                        <span className="topic-postdate"> Post {topic.createDate}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 vcenter">
                                        {topic.message}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 vcenter btn-reply">
                                        <hr />
                                        <i className="fa fa-commenting-o"></i> <a href="#" onClick={self._toogleReply.bind(self,topic.id)}>Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id={'reply-box-'+topic.id} className="hide">
                        {replys}
                        <div className="row reply-box">
                            <div className="col-xs-2"></div>
                            <div className="col-xs-10">
                                <div className="row">
                                    <div className="col-xs-12 no-padding">
                                        <div className="form-group">
                                            <textarea className="form-control" rows="3" id={'reply-'+topic.id} ref="reply" placeholder="ตอบคำถามที่นี่"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 no-padding">
                                        <div className="pull-right">
                                            <button className="btn btn-success btn-sm" onClick={self._postReply.bind(self, topic.id)}>REPLY</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        var instructor = this.state.data.instructors.map(function (user) {
            var detail = marked(user.instructor || '', {sanitize: true});
            return (
                <div key={user.username} className="instructor-detail">
                    <img src={'/images/avatar/'+user.avatar}/>
                    <div className="instructor-name">{user.nameEn}</div>
                    <div className="instructor-profile" dangerouslySetInnerHTML={{__html: detail}}></div>
                </div>
            );
        });

        var player;
        if (this.state.contentType == 'PDF') {
            player = <ViewerJs key={this.state.content} url={this.state.content}/>;
        } else if (this.state.contentType == 'VIDEO') {
            player = <VideoPlayer key={this.state.content} url={this.state.content} data={this.state.contentData}/>;
        }


        var details = marked(this.state.data.details || '', {sanitize: true});
        return (
            <div className="curriculum">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                        {player}
                        <div className="curriculum-content">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Course Details</a></li>
                                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Quiz</a></li>
                                <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Discussions</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="home">
                                    <div className="details" dangerouslySetInnerHTML={{__html: details}}></div>
                                    <ul className="curriculum-items-list">{nodes}</ul>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="profile">
                                    <Quiz data={this.state.data} course={this.props.params.courseId}/>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="messages">
                                    <div className="discussions">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" rows="5" id="topic" ref="topic" placeholder="เพิ่มคำถามลงที่นี่"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="pull-right">
                                                    <button className="btn btn-success btn-sm" onClick={this._postTopic.bind(this)}>POST</button>
                                                </div>
                                            </div>
                                        </div>
                                        {topics}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="instructor-title">
                            Rating
                        </div>
                        <Rating data={this.state.data}/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="instructor-title">
                            Instructor
                        </div>
                        {instructor}
                    </div>
                </div>
            </div>
        );
    }
}
