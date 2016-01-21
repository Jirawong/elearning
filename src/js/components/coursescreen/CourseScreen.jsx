import React from 'react'
import CourseBox from '../coursebox/CourseBox';
import LoginStore from '../../stores/LoginStore';

export default class CourseScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidMount() {
        this._loadCourse();
    }

    componentDidUpdate(prevProps){
        if(prevProps.params.categoryId !== this.props.params.categoryId){
            this._loadCourse()
        }
    }

    _loadCourse(){

        var url;
        if (this.props.params.categoryId) {
            url = '/api/category/' + this.props.params.categoryId;
        } else {
            url = '/api/category';
        }

        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + LoginStore.token
            },
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        });
    }

    render() {
        var nodes = this.state.data.map(function (course, index) {
            course.url = '/curriculum/' + course.id;
            course.classname = 'promotion new';
            course.status = 'New';
            return (
                <div key={index} className="col-xs-3 col-align-center">
                    <CourseBox data={course}/>
                </div>
            );
        });

        return (
            <div>
                <div className="row carousel">
                    {nodes}
                </div>

            </div>
        );
    }
}