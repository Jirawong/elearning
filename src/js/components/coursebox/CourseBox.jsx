import './coursebox.scss';

import React from 'react'

export default class CourseScreen extends React.Component {
    render() {
        return (
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
                                            <img
                                                src="https://udemy-images.udemy.com/user/50x50/93556_173f_9.jpg"
                                                alt="EDUmobile Academy"/>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex">
                                    <span
                                        className="title ellipsis-2lines">Mastering HTML5 Programming - The Easier Way</span>
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
        );
    }
}