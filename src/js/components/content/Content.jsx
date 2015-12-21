import './content.scss';

import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="main-content">
                    <div className="wrapper-left">
                        <div className="btn-group cats-dropdown">
                            <div className="dropdown-menu">
                                <ul className="dropdown-menu-list">
                                    <li>
                                        <a href="#" className="no-underline">
                                            <i className="cat-icon fa fa-university"></i>
                                            <span className="cat-title">Cane Academy</span>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                        <div className="dropdown-menu sub skin1">
                                            <div className="flex-direction-column h100p">
                                                <h4>Cane Academy</h4>
                                                <ul className="sub-list">
                                                    <li>
                                                        <a href="#" className="no-underline">
                                                            <i className="cat-icon fa fa-university"></i>
                                                            การจัดการฟาร์มสมัยใหม่
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
                                        <div className="dropdown-menu sub skin2">
                                            <div className="flex-direction-column h100p">
                                                <h4>Sugar Product Academy</h4>
                                                <ul className="sub-list">
                                                    <li>
                                                        <a href="#" className="no-underline">
                                                            <i className="cat-icon fa fa-university"></i>
                                                            การจัดการฟาร์มสมัยใหม่
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
                                                            การจัดการฟาร์มสมัยใหม่
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
                                        <div className="dropdown-menu sub skin4">
                                            <div className="flex-direction-column h100p">
                                                <h4>Marketing Academy</h4>
                                                <ul className="sub-list">
                                                    <li>
                                                        <a href="#" className="no-underline">
                                                            <i className="cat-icon fa fa-university"></i>
                                                            การจัดการฟาร์มสมัยใหม่
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
                                        <div className="dropdown-menu sub skin5">
                                            <div className="flex-direction-column h100p">
                                                <h4>Financial Academy</h4>
                                                <ul className="sub-list">
                                                    <li>
                                                        <a href="#" className="no-underline">
                                                            <i className="cat-icon fa fa-university"></i>
                                                            การจัดการฟาร์มสมัยใหม่
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-right flex">
                        <div className="row carousel">
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <div className="wishlist btn btn-sm">
                                        <i className="fa fa-heart wish-icon"></i>
                                        <div className="tooltip left">
                                            <div className="tooltip-arrow"></div>
                                            <div className="tooltip-inner in-wishlist none">Wishlisted</div>
                                            <div className="tooltip-inner not-in-wishlist">Wishlist</div>
                                        </div>
                                    </div>
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-info flex-direction-column">
                                                <span className="row-one">35 lectures</span>
                                                <span className="row-two">7 hours video</span>
                                            </span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                                <span className="avatars-list">
                                                    <span className="avatar">
                                                        <img src="https://udemy-images.udemy.com/user/50x50/93556_173f_9.jpg" alt="EDUmobile Academy"/>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion hot">
                                                        Hot
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion new">
                                                        New
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion new">
                                                        New
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion recommend">
                                                        Recommend
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row carousel">
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion hot">
                                                        Hot
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion new">
                                                        New
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion new">
                                                        New
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-3 col-align-center">
                                <div className="course-box">
                                    <a href="#" className="mask no-underline">
                                        <span>
                                            <span className="course-thumb pos-relative">
                                                <img
                                                    src="https://udemy-images.udemy.com/course/240x135/30243_68ef_5.jpg"
                                                    alt="Mastering HTML5 Programming - The Easier Way"/>
                                            </span>
                                            <span className="flex">
                                                <span className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
                                                <span className="body ellipsis-2lines">EDUmobile Academy, High Quality Mobile Training</span>
                                                <span className="review flex-box">
                                                    <span className="review-count">
                                                        <span className="rating">
                                                            <span style={{width:'90.585%'}}></span>
                                                        </span>
                                                        <span> (70)</span>
                                                    </span>
                                                </span>
                                                <span className="flex-align-center mh36">
                                                    <span className="promotion recommend">
                                                        Recommend
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;