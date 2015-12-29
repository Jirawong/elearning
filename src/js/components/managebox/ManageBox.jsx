import './managebox.scss';

import React from 'react';

import HistoryService from '../../services/HistoryService';

export default class CourseManage extends React.Component {

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
        return (
            <div className="manage-box margin-20a">
                <div className="row">
                    <div className="col-xs-12 col-align-center">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}