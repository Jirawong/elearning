/*global $ */
import './coursebasic.scss';

import React from 'react';

export default class CourseBasic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            category: [],
            subcategory: []
        };
    }

    componentDidMount() {
        this._loadCategory();
        this._loadCourse();
    }

    _loadCategory() {
        $.ajax({
            url: '/api/menu',
            dataType: 'json',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {
                this.setState({category: data});
            }.bind(this)
        });
    }

    _loadCourse() {
        $.ajax({
            url: '/api/course/basic/' + this.props.params.courseId,
            dataType: 'json',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        });
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
        var course = {
            id: this.props.params.courseId,
            title: this.refs.title.value,
            subTitle: this.refs.subtitle.value,
            details: this.refs.details.value
        };

        if (this.refs.category.value != -1) {
            course.category = {id: this.refs.category.value};
        }
        if (this.refs.subcategory.value != -1) {
            course.subCategory = {id: this.refs.subcategory.value};
        }

        $.ajax({
            url: '/api/course/basic',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            method: 'POST',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            data: JSON.stringify(course),
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        });

    }

    render() {
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
                                   value={this.state.data.title}/>
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
                                   value={this.state.data.subTitle}/>
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
                                      ref="details" value={this.state.data.details}></textarea>
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
                    <div className="col-xs-12 input-group-sm col-align-center">
                        <button className="btn btn-success btn-sm" onClick={this._save.bind(this)}>Save</button>
                    </div>
                </div>

            </div>
        );
    }
}