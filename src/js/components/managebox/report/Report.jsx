import './report.scss';
import React from 'react';
import HistoryService from '../../../services/HistoryService';

export default class Report extends React.Component {

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
            <div className="report">
                <div className="list">
                    <ul>
                        <li>
                            <span>Administrator Report</span>
                        </li>
                        <li>
                            <a href="/report/video" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-book"></i> รายงานแสดงจำนวนสื่อการสอนและผู้ชม</a>
                        </li>
                        <li>
                            <a href="/report/view" className="no-underline" onClick={this._changePage.bind(this)}><i className="fa fa-book"></i> รายงานแสดงจำนวนและรายชื่อผู้เข้าชมสื่อการสอน</a>
                        </li>
                        <li>
                            <a href="#" className="no-underline"><i className="fa fa-book"></i> รายงานผลการทำแบบทดสอบ</a>
                        </li>
                        <li>
                            <span>Instructor Report</span>
                        </li>
                        <li>
                            <a href="#" className="no-underline"><i className="fa fa-book"></i> รายงานความคืบหน้าการเข้าชมสื่อการสอนของผู้สอน</a>
                        </li>
                        <li>
                            <span>User Report</span>
                        </li>
                        <li>
                            <a href="#" className="no-underline"><i className="fa fa-book"></i> รายงานความคืบหน้าการเข้าชมสื่อการสอน</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}