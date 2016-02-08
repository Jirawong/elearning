import './coursebox.scss';

import React from 'react'

import HistoryService from '../../../services/HistoryService';
import RestService from '../../../services/RestService';

export default class CourseScreen extends React.Component {

    _changePage(e) {
        e.preventDefault();
        HistoryService
            .get()
            .pushState(
                null,
                e.currentTarget.getAttribute('href')
            );
    }

    _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    _toggleWishlist(e) {
        e.preventDefault();
        RestService
            .post('/api/wishlist', {id: this.props.data.id})
            .done(function () {
                $(e.target).toggleClass('active');
            });

    }

    render() {
        var active = (this.props.data.wishlist) ? 'active' : '';
        return (
            <div className="course-box">
                <div className="wishlist btn btn-sm" onClick={this._toggleWishlist.bind(this)}>
                    <i className={'fa fa-heart wish-icon '+active}></i>
                    <div className="tooltip left">
                        <div className="tooltip-arrow"></div>
                        <div className="tooltip-inner in-wishlist none">Wishlisted</div>
                        <div className="tooltip-inner not-in-wishlist">Wishlist</div>
                    </div>
                </div>
                <a href={this.props.data.url} onClick={this._changePage.bind(this)} className="mask no-underline">
                            <span>
                                <span className="course-info flex-direction-column">
                                    <span className="row-one">{this.props.data.lectures}</span>
                                    <span className="row-two">{this.props.data.hours}</span>
                                </span>
                                <span className="course-thumb pos-relative">
                                    <img src={'/images/'+this.props.data.cover}/>
                                    <span className="avatars-list">
                                        <span className="avatar">
                                            <img
                                                src={'images/avatar/'+this.props.data.user.avatar}
                                                alt="EDUmobile Academy"/>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex">
                                    <span
                                        className="title ellipsis-2lines">{this.props.data.title}</span>
                                    <span className="body ellipsis-2lines">{this.props.data.subTitle}</span>
                                    <span className="review flex-box">
                                        <span className="review-count">
                                            <span className="rating">
                                                <span style={{width:'0%'}}></span>
                                            </span>
                                            <span> (0)</span>
                                        </span>
                                    </span>
                                    <span className="flex-align-center mh36">
                                        <span className={this.props.data.classname}>
                                            {this._capitalize(this.props.data.status)}
                                        </span>
                                    </span>
                                </span>
                            </span>
                </a>
            </div>
        );
    }
}