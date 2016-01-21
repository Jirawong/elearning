import './menu.scss';

import React from 'react';
import HistoryService from '../../services/HistoryService';
import LoginStore from '../../stores/LoginStore';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
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

    componentDidMount() {
        $.ajax({
            url: '/api/menu',
            dataType: 'json',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + LoginStore.token
            },
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        });
    }

    render() {

        var self = this;

        var nodes = this.state.data.map(function (main, index) {

            var subNodes = main.childs.map(function (sub, subIndex) {
                return (
                    <li key={subIndex}>
                        <a href={'/category/'+sub.id} className="no-underline" onClick={self._changePage.bind(this)}>
                            <i className="cat-icon fa fa-university"></i>{sub.name}
                        </a>
                    </li>
                );
            });

            var completeSub;
            if (subNodes.length > 0) {
                completeSub = (
                    <div className="dropdown-menu sub skin4">
                        <div className="flex-direction-column h100p">
                            <h4>{main.name}</h4>
                            <ul className="sub-list">
                                {subNodes}
                            </ul>
                        </div>
                    </div>
                );
            }


            return (
                <li key={index}>
                    <a href={'/category/'+main.id} className="no-underline" onClick={self._changePage.bind(this)}>
                        <i className="cat-icon fa fa-university"></i>
                        <span className="cat-title">{main.name}</span>
                        <i className="fa fa-angle-right"></i>
                    </a>
                    {completeSub}
                </li>
            );

        });

        return (
            <div className="btn-group cats-dropdown">
                <div className="dropdown-menu">
                    <ul className="dropdown-menu-list">
                        {nodes}
                    </ul>
                </div>
            </div>
        );
    }
}
