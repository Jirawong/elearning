import React from 'react'
import CourseBox from '../coursebox/CourseBox';

export default class CourseScreen extends React.Component {
    render() {
        return (
            <div className="row carousel">
                <div className="col-xs-3 col-align-center">
                    <CourseBox />
                </div>
                <div className="col-xs-3 col-align-center">
                    <CourseBox />
                </div>
                <div className="col-xs-3 col-align-center">
                    <CourseBox />
                </div>
                <div className="col-xs-3 col-align-center">
                    <CourseBox />
                </div>
            </div>
        );
    }
}