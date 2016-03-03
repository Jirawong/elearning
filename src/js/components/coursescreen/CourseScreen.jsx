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
        if(this.props.location.pathname == '/wishlist') {
            url = '/api/wishlist';
        }else if(this.props.params.search){
            url = '/api/course/search/'+this.props.params.search;
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

                            <div className="row">
                                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                    </ol>

                                    <div className="carousel-inner" role="listbox">
                                        <div className="item active">
                                            <img src="/images/slide/example.png" />
                                        </div>
                                        <div className="item">
                                            <img src="/images/slide/example.png" />
                                        </div>
                                    </div>

                                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

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