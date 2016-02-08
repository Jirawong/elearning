import './profile.scss'

import React from 'react';
import RestService from '../../../../services/RestService';

export default class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount(){
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

    render(){
        if(!this.state.data.username){
            return (<div></div>);
        }

        return (
            <div className="profile">
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
            </div>
        );
    }
}