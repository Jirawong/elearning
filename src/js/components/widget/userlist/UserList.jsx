import './userlist.scss';
import React from 'react';

export default class UserList extends React.Component {

    render() {
        return (
            <div className="user-list">
                <div className="row">
                    <div className="col-detail">
                        <img className="img-cols" src="http://localhost:8000/images/avatar/karoons-10317567_1000198643328876_2892564265594742290_o.jpg"/>
                        <div className="details-cols">
                            <div>Mr. Karoon Sillapapan</div>
                            <div className="grant">Instructor</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}