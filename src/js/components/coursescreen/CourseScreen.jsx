import './coursescreen.scss';
import React from 'react'
import CourseBox from '../widget/coursebox/CourseBox';
import RestService from '../../services/RestService';

export default class CourseScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        this._loadCourse();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this._loadCourse()
        }
    }

    _loadCourse() {
        var url;
        if(this.props.location.pathname == '/wishlist'){
            url = '/api/wishlist';
        }else {
            if (this.props.params.categoryId) {
                url = '/api/category/' + this.props.params.categoryId;
            } else {
                url = '/api/category';
            }
        }

        RestService
            .get(url)
            .done(function (data) {
                this.setState({data: data});
            }.bind(this));
    }

    render() {
        var nodes = this.state.data.map(function (course, index) {
            course.url = '/curriculum/' + course.id;
            course.classname = 'promotion new';
            course.status = 'New';
            return (
                <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-align-center">
                    <CourseBox data={course}/>
                </div>
            );
        });

        return (
            <div className="course-screen">
                <div className="row">
                    <div className="col-xs-12 col-align-center">
                        <div className="content">
                            <div className="row carousel">
                                {nodes}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}