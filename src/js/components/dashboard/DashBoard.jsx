/*global $ */
import './dashboard.scss';

import React from 'react';
import CourseBox from '../coursebox/CourseBox';

import HistoryService from '../../services/HistoryService';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    _createCourse(e) {
        e.preventDefault();
        $.ajax({
            url: '/api/course/create',
            dataType: 'json',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {
                HistoryService
                    .get()
                    .pushState(
                        null,
                        '/course-basic/' + data
                    );
            }.bind(this)
        });
    }

    _loadCourse() {
        $.ajax({
            url: '/api/course',
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

    componentDidMount() {
        //var data = {
        //    url: '/course-manage',
        //    title: 'Draft Course',
        //    subtitle: 'Draft Course SubTitle',
        //    lectures: '0 lectures',
        //    hours: '0 hours video',
        //    promotion: 'Draft',
        //    classname: 'promotion recommend'
        //}
        //var publish = {
        //    url: '/course-manage',
        //    title: 'Mastering HTML5 Programming - The Easier Way',
        //    subtitle: 'EDUmobile Academy, High Quality Mobile Training',
        //    lectures: '35 lectures',
        //    hours: '7 hours video',
        //    promotion: 'Published',
        //    classname: 'promotion new'
        //}

        this._loadCourse();
    }

    render() {

        var nodes = this.state.data.map(function (course) {
            course.url = '/course-basic/' + course.id;
            if(course.status == 'Draft'){
                course.classname = 'promotion recommend';
            }else{
                course.classname = 'promotion new';
            }


            return (
                <div key={course.id} className="col-xs-3 col-align-center">
                    <CourseBox data={course}/>
                </div>
            );
        });

        return (
            <div className="dashboard">
                <div className="btn-group pull-right">
                    <button onClick={this._createCourse.bind(this)} className="btn btn-primary">
                        Create Course
                    </button>
                </div>

                <div className="card-box">
                    <div className="row carousel">
                        {nodes}
                    </div>
                </div>
            </div>
        );
    }
}