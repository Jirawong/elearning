import './usermanage.scss';
import React from 'react'

import UserList from '../../../widget/userlist/UserList';

export default class UserManage extends React.Component {
    render() {
        return (
            <div className="user-manage">
                <div className="row">
                    <div className="col-xs-12 col-lg-6">
                        <UserList />
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <UserList />
                    </div>
                    <div className="col-xs-12 col-lg-6">
                        <UserList />
                    </div>
                </div>
            </div>
        );
    }
}