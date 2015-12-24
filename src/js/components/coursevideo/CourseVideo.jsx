/* global $ */

import './coursevideo.scss';

import React from 'react'

export default class CourseVideo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {files: []};
    }

    _chooseFile(e) {
        e.preventDefault();
        $('#videoupload').click();
    }

    _onFileSelected(e) {
        var files = e.target.files;
        var fileList = this.state.files;
        for (var i = 0; i < files.length; i++) {
            fileList[i] = files[i];
        }

        this.setState({files: fileList});
    }


    render() {
        console.log(this.state.files);

        var fileNodes = this.state.files.map(function (file) {
            return (
                <div key={file.name} className="progress" style={{height:'40px'}}>
                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                         aria-valuemax="100" style={{width: '60%'}}>
                        {file.name} 60%
                    </div>
                </div>
            );
        });

        return (
            <div className="coursevideo">

                <div className="form-upload">
                    <i className="fa fa-cloud-upload fa-3 mr5"></i>
                    <input id="videoupload" multiple type="file" onChange={this._onFileSelected.bind(this)}/>
                    <button className="btn btn-primary" onClick={this._chooseFile.bind(this)}>
                        <i className="fa fa-upload mr5"></i>
                        CHOOSE FILES TO UPLOAD
                    </button>
                </div>
                <div id="filelist">
                    {fileNodes}
                </div>
            </div>
        );
    }
}