/*global $ */
import './coursecurriculum.scss';
import React from 'react';

export default class CourseCurriculum extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: {sections:[]}
        };
    }

    componentDidMount() {
        this._loadCourse();
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
                console.log(data);
                this.setState({data: data});
            }.bind(this)
        });
    }

    render(){

        var self = this;

        var nodes = this.state.data.sections.map(function (main, index) {

            return (
                <div className="panel-group" key={index} value={index}>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            <div className="btn-group pull-right">
                                <button className="btn btn-default btn-xs">Edit</button>
                                <button className="btn btn-default btn-xs">
                                    Delete
                                </button>
                            </div>
                            <h4 className="panel-title">
                                <a data-toggle="collapse" href={'#collapse'+index}>{main.name}</a>
                            </h4>
                        </div>
                        <div id={'collapse'+index} className="panel-collapse collapse">
                            <ul className="list-group">
                            </ul>
                            <div className="panel-footer">
                                <button className="btn btn-default btn-xs">
                                    Add SubMenu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return(
            <div className="course-curriculum">
                <div className="sortable">
                    {nodes}
                </div>
                <div className="btn-group">
                    <button className="btn btn-default btn-sm">Add Section</button>
                </div>
            </div>
        );
    }
}