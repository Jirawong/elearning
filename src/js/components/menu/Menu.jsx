import './menu.scss';

import React from 'react';
import HistoryService from '../../services/HistoryService';

export default class Menu extends React.Component {

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
            <div className="btn-group cats-dropdown">
                <div className="dropdown-menu">
                    <ul className="dropdown-menu-list">
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Cane Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin5">
                                <div className="flex-direction-column h100p">
                                    <h4>Cane Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การจัดการฟาร์มสมัยใหม่
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การส่งเสริมชาวไร
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การบริหารความสัมพันธ์กับชาวไร่
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การชลประทาน
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การเก็บเกี่ยวและการขนส่ง
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                เทคโนโลยีสารสนเทสงานอ้อย
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การประเมินและติดตามอ้อย
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การบริหารสินเชื่อ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/courses" className="no-underline"
                                               onClick={this._changePage.bind(this)}>
                                                <i className="cat-icon fa fa-university"></i>
                                                การจัดทำงบประมาณด้านอ้อย
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Sugar Product Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin4">
                                <div className="flex-direction-column h100p">
                                    <h4>Sugar Product Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การผลิตน้ำตาลทรายดิบ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การผลิตน้ำตาลรีไฟน์
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การผลิตน้ำเชื่อม
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การซ่อมบำรุงเครื่องจักร
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Energy Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin3">
                                <div className="flex-direction-column h100p">
                                    <h4>Energy Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การผลิตไฟฟ้า
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การผลิตเอทานอล
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                พลังงานทางเลือก
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Marketing Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin2">
                                <div className="flex-direction-column h100p">
                                    <h4>Marketing Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                ผลิตภัณฑ์ของกลุ่มมิตรผล
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การขายธุรกิจอุตสาหกรรม
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การขายธุรกิจตัวแทนจำหน่าย
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การขายต่างประเทศ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การตลาดโมลาส
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                โครงสร้างราคา
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Future Market & Risk Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Derivative
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Logistic
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Financial Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin1">
                                <div className="flex-direction-column h100p">
                                    <h4>Financial Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Economic Value Added
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                ความรู้เบื้องต้นด้านบัญชีและการเงิน
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                ธุรกรรมและเครื่องมือทางการเงิน
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                สินเชื่อและการให้เงินกู้
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การบริหารต้นทุน
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การประกันภัย
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                ระบบทางบัญชีและการเงิน
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                ภาษีและกฏหมายที่เกี่ยวข้อง
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">IT Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin5">
                                <div className="flex-direction-column h100p">
                                    <h4>IT Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การบริหารระบบสารสนเทศ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การบริหารจัดการระบบข้อมูล
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                IT Infrastructure
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                CANE MIS
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การควบคุมคุณภาพระบบสารสนเทศ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การพัฒนาระบบ
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">People Academy</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin4">
                                <div className="flex-direction-column h100p">
                                    <h4>People Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                นโยบายและกลยุทธิ์ HR
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การสรรหาและคัดเลือก
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การพัฒนาบุคลากร
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การประเมินผลการปฏิบัติงาน
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                ระบบ EVA
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Career Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Talent Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                วัฒนธรรมมิตรผล
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                World Class Organization
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                สวัสดิการและผลตอบแทน
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Employee Engagement
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                การบริหารวินัยและการลงโทษ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                ชุดความรู้สำหรับพนักงานใหม่
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Safety & Productivity</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin3">
                                <div className="flex-direction-column h100p">
                                    <h4>Financial Academy</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Quality Assurance
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Quality Standard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Safety
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Productivity Management
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                Environment
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Technical & Engineering</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                            <div className="dropdown-menu sub skin2">
                                <div className="flex-direction-column h100p">
                                    <h4>Technical & Engineering</h4>
                                    <ul className="sub-list">
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                TPM
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="no-underline">
                                                <i className="cat-icon fa fa-university"></i>
                                                6 Module
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" className="no-underline">
                                <i className="cat-icon fa fa-university"></i>
                                <span className="cat-title">Leadership & Management</span>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
