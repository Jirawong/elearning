import './profilemanage.scss'

import React from 'react';
import RestService from '../../../../services/RestService';

export default class ProfileManage extends React.Component {

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
            .get('/api/user/' + this.props.params.username)
            .done(function (data) {
                self.setState({data: data});
            });
    }

    _save(e) {
        e.preventDefault();
        var self = this;
        var data = {
            username: this.state.data.username,
            authority: this.refs.role.value
        }
        RestService
            .post('/api/user/saverole',data)
            .done(function (data) {
                self.setState({data: data});
            });
    }

    render() {
        if (!this.state.data.username) {
            return (<div></div>);
        }

        return (
            <div className="profile-manage">
                <div className="row">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-4">
                        <div className="form-group">
                            <img src={'/images/avatar/'+this.state.data.avatar}/>
                        </div>
                    </div>
                    <div className="col-xs-4"></div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <label htmlFor="title">Name</label>
                            <input id="title" className="form-control" type="text" readOnly="true" defaultValue={this.state.data.nameEn}/>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <label htmlFor="title">Position</label>
                            <input id="title" className="form-control" type="text" readOnly="true" defaultValue={this.state.data.positionTh}/>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <label htmlFor="title">Email</label>
                            <input id="title" className="form-control" type="text" readOnly="true" defaultValue={this.state.data.email}/>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="form-group input-group-sm">
                            <label htmlFor="role">Role</label>
                            <select className="form-control" id="role" ref="role" defaultValue={this.state.data.authorities[0].authority}>
                                <option value="User">User</option>
                                <option value="Instructor">Instructor</option>
                                <option value="Administrator">Administrator</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>

                <div className="row">
                    <div className="col-xs-4 col-lg-5"></div>
                    <div className="col-xs-4 col-lg-2 input-group-sm col-align-center">
                        <button className="btn btn-success btn-sm" onClick={this._save.bind(this)}>Save</button>
                    </div>
                    <div className="col-xs-4 col-lg-5"></div>
                </div>
            </div>
        );
    }
}