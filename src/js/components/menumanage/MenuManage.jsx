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
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            success: function (data) {
                this.setState({data: data});
                this._sortable();
            }.bind(this)
        });

    }

    _sortable() {
        var self = this;
        $('.sortmenu,.sortsubmenu').sortable({
            placeholder: 'alert alert-warning place-holder',
            update: function () {
                self.positions = $(this).sortable('toArray', {attribute: 'value'});
                self._move();
            }
        }).disableSelection();
    }

    _move() {
        this.positions.map(function (pos, index) {
            console.log(pos);
            if (pos.indexOf('.') === -1) {
                var menu = this.state.data[pos];
                menu.ordered = index;
            } else {
                var position = pos.split('.');
                var menu = this.state.data[position[0]].childs[position[1]];
                menu.ordered = position[0]+'.'+index;
            }
        }.bind(this));
        this.setState({data: this.state.data});
    }

    _add() {
        var newMenu = {
            name: 'New Menu',
            url: 'url',
            childs: []
        };
        this.state.data.push(newMenu);
        this.setState(this.state.data);
    }

    _addSub(id) {
        var newMenu = {
            name: 'New SubMenu',
            url: 'url',
            childs: []
        };
        this.state.data[id].childs.push(newMenu);
        this.setState(this.state.data);
        this._sortable();
    }

    _delete(id) {
        $.ajax({
            url: '/api/menu',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            method: 'DELETE',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            data: JSON.stringify({id: id}),
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        });
    }

    _save() {
        $.ajax({
            url: '/api/menu',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            method: 'POST',
            cache: false,
            headers: {
                'Authorization': 'bearer ' + localStorage.getItem('access_token')
            },
            data: JSON.stringify(this.state.data),
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
                    <li key={index+'.'+subIndex} value={index+'.'+subIndex} className="list-group-item">
                        <div className="btn-group pull-right">
                            <button className="btn btn-default btn-xs">Edit</button>
                            <button onClick={self._delete.bind(self,sub.id)} className="btn btn-default btn-xs">
                                Delete
                            </button>
                        </div>
                        {sub.name}
                    </li>
                );
            });

            return (
                <div className="panel-group" key={index} value={index}>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix">
                            <div className="btn-group pull-right">
                                <button className="btn btn-default btn-xs">Edit</button>
                                <button onClick={self._delete.bind(self,main.id)} className="btn btn-default btn-xs">
                                    Delete
                                </button>
                            </div>
                            <h4 className="panel-title">
                                <a data-toggle="collapse" href={'#collapse'+index}>{main.name}</a>
                            </h4>
                        </div>
                        <div id={'collapse'+index} className="panel-collapse collapse">
                            <ul className="list-group sortsubmenu">
                                {subNodes}
                            </ul>
                            <div className="panel-footer">
                                <button onClick={self._addSub.bind(self,index)} className="btn btn-default btn-xs">Add
                                    SubMenu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="menumanage">
                <div className="sortmenu">
                    {nodes}
                </div>
                <div className="btn-group">
                    <button onClick={this._add.bind(this)} className="btn btn-default btn-sm">Add Menu</button>
                    <button onClick={this._save.bind(this)} className="btn btn-default btn-sm">Save</button>
                </div>
            </div>
        );
    }
}