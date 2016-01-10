import React from 'react'
import CourseBox from '../coursebox/CourseBox';

export default class CourseScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {}};
    }

    componentDidMount() {
        var data = {
            url: '/curriculum',
            title: 'Mastering HTML5 Programming - The Easier Way',
            subtitle: 'EDUmobile Academy, High Quality Mobile Training',
            lectures: '35 lectures',
            hours: '7 hours video',
            promotion: 'Hot',
            classname: 'promotion hot'
        }
        this.setState({data: data});
    }

    render() {
        return (
            <div>
                <div className="row carousel">
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                </div>
                <div className="row carousel">
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                </div>
                <div className="row carousel">
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                    <div className="col-xs-3 col-align-center">
                        <CourseBox data={this.state.data}/>
                    </div>
                </div>
            </div>
        );
    }
}