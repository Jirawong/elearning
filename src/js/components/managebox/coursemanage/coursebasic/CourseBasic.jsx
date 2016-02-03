/*global $ */

import './coursebasic.scss';

import React from 'react';
import RestService from '../../../../services/RestService';

export default class CourseBasic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            category: [],
            subcategory: [],
            publishButton: 'Publish'
        };
    }

    componentDidMount() {
        this._loadCategory();
        this._loadCourse();
    }

    _loadCategory() {
        RestService
            .get('/api/menu')
            .done(function (data) {
                this.setState({category: data});
            }.bind(this));
    }

    _loadCourse() {
        var self = this;
        RestService
            .get('/api/course/basic/' + this.props.params.courseId)
            .done(function (data) {
                self.setState({data: data, publishButton: self._checkStatus(data.status)});
            });
    }

    _toggleStatus(e) {
        e.preventDefault();
        var self = this;
        RestService
            .post('/api/course/status', this.state.data)
            .done(function (data) {
                self.setState({publishButton: self._checkStatus(data.status)});
            }.bind(this));
    }

    _checkStatus(status) {
        if (status == 'DRAFT' || status == 'UNPUBLISH') {
            return 'Publish';
        } else {
            return 'Unpublish';
        }
    }

    _onChangeCategory(e) {
        e.preventDefault();

        var self = this;
        var category = $.grep(this.state.category, function (c) {
            return c.id == self.refs.category.value;
        });
        if (self.refs.category.value == -1) {
            this.setState({subcategory: []});
        } else {
            this.setState({subcategory: category[0].childs});
        }


    }

    _save(e) {
        e.preventDefault();
        var course = this.state.data;
        course.title = this.refs.title.value;
        course.subTitle = this.refs.subtitle.value;
        course.details = this.refs.details.value;

        if (this.refs.category.value != -1) {
            course.category = {id: this.refs.category.value};
        }
        if (this.refs.subcategory.value != -1) {
            course.subCategory = {id: this.refs.subcategory.value};
        }

        RestService
            .post('/api/course/basic', course)
            .done(function (data) {
                this.setState({data: data});
            }.bind(this));

    }

    render() {
        if (!this.state.data.id) {
            return (
                <div></div>
            );
        }
        var self = this;
        var category = this.state.category.map(function (cat) {
            if (self.state.data.category != null && self.state.data.category.id == cat.id) {
                return (<option key={cat.id} value={cat.id} selected>{cat.name}</option>);
            } else {
                return (<option key={cat.id} value={cat.id}>{cat.name}</option>);
            }
        });

        var subcategory = this.state.subcategory.map(function (cat) {
            if (self.state.data.category != null && self.state.data.subCategory != null && self.state.data.subCategory.id == cat.id) {
                return (<option key={cat.id} value={cat.id} selected>{cat.name}</option>);
            } else {
                return (<option key={cat.id} value={cat.id}>{cat.name}</option>);
            }

        });


        return (
            <div className="course-basic">

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <label htmlFor="title">Title</label>
                            <input id="title"
                                   className="form-control"
                                   placeholder="Course Title"
                                   name="title"
                                   type="text"
                                   ref="title"
                                   defaultValue={this.state.data.title}/>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <label htmlFor="subtitle">Subtitle</label>
                            <input id="subtitle"
                                   className="form-control"
                                   placeholder="Course Subtitle"
                                   name="title"
                                   type="text"
                                   ref="subtitle"
                                   defaultValue={this.state.data.subTitle}/>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <label htmlFor="detail">Details</label>
                            <textarea className="form-control" rows="5" id="detail"
                                      ref="details" defaultValue={this.state.data.details}></textarea>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-5">
                        <div className="form-group input-group-sm">
                            <label htmlFor="category">Category</label>
                            <select className="form-control" id="category" ref="category"
                                    onChange={this._onChangeCategory.bind(this)}>
                                <option value="-1">-- SELECT ONE --</option>
                                {category}
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-5">
                        <div className="form-group input-group-sm">
                            <label htmlFor="subcategory">Subcategory</label>
                            <select className="form-control" id="subcategory" ref="subcategory">
                                <option value="-1">-- SELECT ONE --</option>
                                {subcategory}
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-5"></div>
                    <div className="col-xs-1 input-group-sm col-align-center">
                        <button className="btn btn-success btn-sm" onClick={this._save.bind(this)}>Save</button>
                    </div>
                    <div className="col-xs-1 input-group-sm col-align-center">
                        <button className="btn btn-primary btn-sm" onClick={this._toggleStatus.bind(this)}>{this.state.publishButton}</button>
                    </div>
                    <div className="col-xs-5"></div>
                </div>

            </div>
        );
    }
}