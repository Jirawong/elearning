/*global $ */
import './menumanage.scss';

import React from 'react'

export default class MenuManage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
        this.positions = [];
    }

    componentDidMount() {
        $.ajax({
            url: '/api/menu',
            dataType: 'json',
            cache: false,
            headers: {
                'Authorization': 'bearer '+localStorage.getItem('access_token')
            },
            success: function (data) {
                console.log(data);
                this.setState({data: data});
            }.bind(this)
        });

        var self = this;

        $('.sortmenu').sortable({
            placeholder: 'alert alert-warning place-holder',
            update: function () {
                console.log($('.sortmenu').sortable('toArray', {attribute: 'value'}));
                this.positions = $('.sortmenu').sortable('toArray', {attribute: 'value'});
                self._move();
            }.bind(this)
        }).disableSelection();

    }

    _move() {
        var moveMenu = [];
        this.positions.map(function (pos) {
            if (pos.indexOf('.') === -1) {
                var menu = $.extend(true,{},this.state.data[pos]);
                menu.childs = [];
                moveMenu.push(menu);
            } else {
                var position = pos.split('.');
                var menu = $.extend(true,{},this.state.data[position[0]].childs[position[1]]);
                moveMenu[moveMenu.length - 1].childs.push(menu);
            }
        }.bind(this));
        //this.setState({data:moveMenu});
        console.log(moveMenu);
        console.log(JSON.stringify(moveMenu));
        $.ajax({
            url: '/api/menu',
            dataType: 'json',
            contentType:"application/json; charset=utf-8",
            method: 'POST',
            cache: false,
            headers: {
                'Authorization': 'bearer '+localStorage.getItem('access_token')
            },
            data: JSON.stringify(moveMenu)
        });
    }

    _add() {
        var newMenu = {
            name: 'new',
            url: 'url',
            childs: []
        };
        this.state.data.push(newMenu);
        this.setState(this.state.data);
        console.log(this.state.data);
        $.ajax({
            url: '/api/menu',
            dataType: 'json',
            contentType:"application/json; charset=utf-8",
            method: 'POST',
            cache: false,
            headers: {
                'Authorization': 'bearer '+localStorage.getItem('access_token')
            },
            data: JSON.stringify(this.state.data)
        });
    }

    render() {
        var nodes = [];
        this.state.data.map(function (main, index) {
            nodes.push(<div key={index} value={index} className="alert alert-info">{main.name}</div>);
            main.childs.map(function (sub, subindex) {
                nodes.push(<div key={index +"."+subindex}
                                value={index +"."+subindex}
                                className="alert alert-warning sub-menu">{sub.name}</div>);
            });
        });

        return (
            <div className="menumanage">
                <div className="sortmenu">
                    {nodes}
                </div>
                <button onClick={this._add.bind(this)}>Add</button>
            </div>
        );
    }
}