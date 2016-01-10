import './dashboard.scss';

import React from 'react';
import CourseBox from '../coursebox/CourseBox';

import HistoryService from '../../services/HistoryService';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}, publish: {}};
    }

    componentDidMount() {
        var data = {
            url: '/course-manage',
            title: 'Draft Course',
            subtitle: 'Draft Course SubTitle',
            lectures: '0 lectures',
            hours: '0 hours video',
            promotion: 'Draft',
            classname:'promotion recommend'
        }
        var publish = {
            url: '/course-manage',
            title: 'Mastering HTML5 Programming - The Easier Way',
            subtitle:'EDUmobile Academy, High Quality Mobile Training',
            lectures: '35 lectures',
            hours: '7 hours video',
            promotion: 'Published',
            classname:'promotion new'
        }
        this.setState({
            data: data,
            publish: publish
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

    render() {
        return (
            <div className="dashboard">
                <div className="btn-group pull-right">
                    <a href="/course-manage" onClick={this._changePage.bind(this)} className="btn btn-primary">
                        Create Course
                    </a>
                </div>

                <div className="card-box">
                    <div className="row carousel">
                        <div className="col-xs-3 col-align-center">
                            <CourseBox data={this.state.data}/>
                        </div>
                        <div className="col-xs-3 col-align-center">
                            <CourseBox data={this.state.publish}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}