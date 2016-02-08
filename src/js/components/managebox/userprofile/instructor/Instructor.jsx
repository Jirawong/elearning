import './instructor.scss';
import React from 'react';

import RestService from '../../../../services/RestService';

export default class Instructor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        this._loadUser();
    }

    _loadUser() {
        var self = this;
        RestService
            .get('/api/user')
            .done(function (data) {
                self.setState({data: data});
            });
    }

    _save() {
        var self = this;
        RestService
            .post('/api/user/instructor', {instructor: this.refs.detail.value})
            .done(function (data) {
                self.setState({data: data});
            });

    }

    render() {
        if (!this.state.data.username) {
            return (<div></div>);
        }

        return (
            <div className="instructor">
                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <textarea className="form-control" rows="10" id="detail" ref="detail" defaultValue={this.state.data.instructor}></textarea>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>
                <div className="row">
                    <div className="col-xs-5"></div>
                    <div className="col-xs-2 input-group-sm col-align-center">
                        <button className="btn btn-success btn-sm" onClick={this._save.bind(this)}>Save</button>
                    </div>
                    <div className="col-xs-5"></div>
                </div>
            </div>
        );
    }
}