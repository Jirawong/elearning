import './usermanage.scss';
import React from 'react'

import UserList from '../../../widget/userlist/UserList';

import RestService from '../../../../services/RestService';
import HistoryService from '../../../../services/HistoryService';

export default class UserManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        this._loadUser();
    }

    _loadUser() {
        var self = this;
        RestService
            .get('/api/listusers')
            .done(function (data) {
                self.setState({data: data});
            });
    }

    _changePage(e) {
        e.preventDefault();
        HistoryService
            .get()
            .pushState(
                null,
                e.currentTarget.getAttribute('href')
            );
    }

    render() {
        if(this.state.data.length == 0){
            return (<div></div>);
        }

        var self = this;

        var nodes = this.state.data.map(function(user){

            return (
                <div key={user.username} className="col-xs-12 col-lg-6" href={'/profile-manage/'+user.username} onClick={self._changePage.bind(this)}>
                    <UserList user={user} />
                </div>
            );

        });

        return (
            <div className="user-manage">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">
                                    <span className="fa fa-search" />
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {nodes}
                </div>
            </div>
        );
    }
}