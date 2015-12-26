/* global $ */

import './coursevideo.scss';

import React from 'react'
import UploadProgress from '../uploadprogress/UploadProgress';

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
        var fileList = [];
        var len = this.state.files.length;

        for (var i = len; i < files.length+len; i++) {
            var file = files[i-len];
            file.id = i;
            fileList[i-len] = file;
        }

        var concat = this.state.files.concat(fileList);
        this.setState({files: concat});
    }


    render() {
        var fileNodes = this.state.files.map(function (file) {
            return (
                <UploadProgress key={file.id} file={file}/>
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
                <div className="filelist">
                    {fileNodes}
                </div>
            </div>
        );
    }
}