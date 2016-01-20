/*global $ */
import './coursecurriculum.scss';
import React from 'react';
import UploadProgress from '../uploadprogress/UploadProgress';

export default class CourseCurriculum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {sections: []},
            files: {}
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
                this.setState({data: data});
            }.bind(this)
        });
    }

    _addSection(e) {
        e.preventDefault();
        var section = {
            name: 'New Section',
            lectures: []
        }
        this.state.data.sections.push(section);
        this._save();
    }

    _addLecture(index) {
        var lecture = {
            name: 'New Lecture'
        }
        this.state.data.sections[index].lectures.push(lecture);
        this._save();
    }

    _edit(e) {
        e.preventDefault();
        $(e.target).parent().parent().addClass('hide');
        $(e.target).parent().parent().next().removeClass('hide');
    }

    _saveEdit(index, e) {
        e.preventDefault();
        var section;

        if (index.indexOf('-') === -1) {
            section = this.state.data.sections[index];
        } else {
            var position = index.split('-');
            section = this.state.data.sections[position[0]].lectures[position[1]];
        }

        section.name = $('#editbox-' + index).val();
        this._save();
        this._cancle(e);
    }

    _cancle(e) {
        e.preventDefault();
        $(e.target).parent().parent().parent().parent().addClass('hide');
        $(e.target).parent().parent().parent().parent().prev().removeClass('hide');
    }

    _delete(index) {
        if (index.indexOf('.') === -1) {
            this.state.data.sections.splice(index, 1);
        } else {
            var position = index.split('.');
            this.state.data.sections[position[0]].lectures.splice(position[1], 1);
        }
        this._save();
    }

    _save() {
        $.ajax({
            url: '/api/course/basic',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            method: 'POST',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            data: JSON.stringify(this.state.data),
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        });
    }

    _chooseFile(index, subIndex, e) {
        e.preventDefault();
        $('#videoupload' + index + '-' + subIndex).click();
    }

    _onFileSelected(index, subIndex, e) {
        e.preventDefault();
        this.state.files[index + '-' + subIndex] = e.target.files[0]
        this.setState(this.state.files);
    }

    _toggleHide(e) {
        e.preventDefault();
        $(e.target).parent().parent().next().next().toggleClass('hide');
    }

    render() {
        var self = this;

        var nodes = this.state.data.sections.map(function (main, index) {

            var subNodes = main.lectures.map(function (sub, subIndex) {

                var upload;
                if (sub.vdo) {
                    upload = (
                        <div className="from-progress hide">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}>
                                    {sub.vdo} 100 %
                                </div>
                            </div>
                        </div>
                    );
                } else if (self.state.files[index + '-' + subIndex]) {
                    upload = (
                        <div className="from-progress">
                            <UploadProgress lecture={sub.id} file={self.state.files[index+'-'+subIndex]}/>
                        </div>
                    );
                } else {
                    upload = (
                        <div className="form-upload hide">
                            <input id={'videoupload'+index+'-'+subIndex} accept="video/*" type="file" onChange={self._onFileSelected.bind(self,index,subIndex)}/>
                            <button className="btn btn-primary btn-xs" onClick={self._chooseFile.bind(this,index,subIndex)}>
                                <i className="fa fa-upload mr5"></i>CHOOSE FILES TO UPLOAD
                            </button>
                        </div>
                    );
                }

                return (
                    <li key={index+'.'+subIndex} value={index+'.'+subIndex} className="list-group-item">
                        <div>
                            <div className="btn-group pull-right">
                                <button className="btn btn-default btn-xs" onClick={self._edit.bind(this)}>Edit</button>
                                <button className="btn btn-default btn-xs" onClick={self._toggleHide.bind(this)}>Vdo</button>
                                <button className="btn btn-default btn-xs" onClick={self._delete.bind(self,index+'.'+subIndex)}>Delete</button>
                            </div>
                            {sub.name}
                        </div>
                        <div className="hide">
                            <div className="row">
                                <div className="col-xs-8">
                                    <input id={'editbox-'+index+'-'+subIndex} className="form-group" type="text" defaultValue={sub.name} onChange={function(){}}/>
                                </div>
                                <div className="col-xs-4">
                                    <div className="btn-group pull-right">
                                        <button className="btn btn-default btn-xs" onClick={self._saveEdit.bind(self,index+'-'+subIndex)}>Save</button>
                                        <button className="btn btn-default btn-xs" onClick={self._cancle.bind(this)}>Cancle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {upload}
                    </li>
                );
            });

            return (
                <div className="panel-group" key={index} value={index}>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            <div className="btn-group pull-right">
                                <button className="btn btn-default btn-xs" onClick={self._edit.bind(this)}>Edit</button>
                                <button className="btn btn-default btn-xs" onClick={self._delete.bind(self,index+'')}>Delete</button>
                            </div>
                            <h4 className="panel-title">
                                <a data-toggle="collapse" href={'#collapse'+index}>{main.name}</a>
                            </h4>
                        </div>

                        <div className="panel-heading clearfix hide">
                            <div className="row">
                                <div className="col-xs-8">
                                    <input id={'editbox-'+index} className="form-group" type="text" defaultValue={main.name} onChange={function(){}}/>
                                </div>
                                <div className="col-xs-4">
                                    <div className="btn-group pull-right">
                                        <button className="btn btn-default btn-xs" onClick={self._saveEdit.bind(self,index+'')}>Save</button>
                                        <button className="btn btn-default btn-xs" onClick={self._cancle.bind(this)}>Cancle</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={'collapse'+index} className="panel-collapse collapse">
                            <ul className="list-group">
                                {subNodes}
                            </ul>
                            <div className="panel-footer">
                                <button className="btn btn-default btn-xs" onClick={self._addLecture.bind(self,index)}>
                                    Add Lecture
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="course-curriculum">
                <div className="sortable">
                    {nodes}
                </div>
                <div className="btn-group">
                    <button className="btn btn-default btn-sm" onClick={this._addSection.bind(self)}>Add Section</button>
                </div>
            </div>
        );
    }
}