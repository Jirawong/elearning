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
            if (pos.indexOf('.') === -1) {
                var menu = this.state.data[pos];
                menu.ordered = index;
            } else {
                var position = pos.split('.');
                var menu = this.state.data[position[0]].childs[position[1]];
                menu.ordered = position[0] + '.' + index;
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

    _delete(index) {
        if (index.indexOf('.') === -1) {
            this.state.data.splice(index, 1);
        } else {
            var position = index.split('.');
            this.state.data[position[0]].childs.splice(position[1], 1);
        }
        this.setState(this.state.data);
    }

    _save() {
        var $btn = $('#saveBtn').button('loading');

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
                //this.setState({data: data});
                setTimeout(function () {
                    $btn.button('reset');
                }, 2000);
            }.bind(this)
        });

    }

    _edit(e) {
        e.preventDefault();
        $(e.target).parent().parent().addClass('hide');
        $(e.target).parent().parent().next().removeClass('hide');
    }

    _saveEdit(index, e) {
        e.preventDefault();
        var menu;

        if (index.indexOf('-') === -1) {
            menu = this.state.data[index];
        } else {
            var position = index.split('-');
            menu = this.state.data[position[0]].childs[position[1]];
        }

        menu.name = $('#editbox-' + index).val();
        this.setState(this.state.data);
        this._cancle(e);
    }

    _cancle(e) {
        e.preventDefault();
        $(e.target).parent().parent().parent().parent().addClass('hide');
        $(e.target).parent().parent().parent().parent().prev().removeClass('hide');
    }

    render() {

        var self = this;

        var nodes = this.state.data.map(function (main, index) {

            var subNodes = main.childs.map(function (sub, subIndex) {
                return (
                    <li key={index+'.'+subIndex} value={index+'.'+subIndex} className="list-group-item">
                        <div>
                            <div className="btn-group pull-right">
                                <button onClick={self._edit.bind(this)} className="btn btn-default btn-xs">Edit</button>
                                <button onClick={self._delete.bind(self,index+'.'+subIndex)} className="btn btn-default btn-xs">
                                    Delete
                                </button>
                            </div>
                            {sub.name}
                        </div>
                        <div className="hide">
                            <div className="row">
                                <div className="col-xs-8">
                                    <input id={'editbox-'+index+'-'+subIndex} className="form-group" type="text" defaultValue={sub.name} onChange={function(){}}/>
                                </div>
                                <div className="col-xs-4">
                                    <div className="btn-group pull-right">
                                        <button className="btn btn-default btn-xs" onClick={self._saveEdit.bind(self,index+'-'+subIndex)}>
                                            Save
                                        </button>
                                        <button className="btn btn-default btn-xs" onClick={self._cancle.bind(this)}>
                                            Cancle
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                );
            });

            return (
                <div className="panel-group" key={index} value={index}>
                    <div className="panel panel-default">
                        <div className="panel-heading clearfix display">
                            <div className="btn-group pull-right">
                                <button className="btn btn-default btn-xs" onClick={self._edit.bind(this)}>Edit</button>
                                <button onClick={self._delete.bind(self,index+'')} className="btn btn-default btn-xs">
                                    Delete
                                </button>
                            </div>
                            <h4 className="panel-title">
                                <a data-toggle="collapse" href={'#collapse'+index}>{main.name}</a>
                            </h4>
                        </div>

                        <div className="panel-heading clearfix editable hide">
                            <div className="row">
                                <div className="col-xs-8">
                                    <input id={'editbox-'+index} className="form-group" type="text"
                                           defaultValue={main.name} onChange={function(){}}/>
                                </div>
                                <div className="col-xs-4">
                                    <div className="btn-group pull-right">
                                        <button className="btn btn-default btn-xs"
                                                onClick={self._saveEdit.bind(self,index+'')}>
                                            Save
                                        </button>
                                        <button className="btn btn-default btn-xs" onClick={self._cancle.bind(this)}>
                                            Cancle
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id={'collapse'+index} className="panel-collapse collapse">
                            <ul className="list-group sortsubmenu">
                                {subNodes}
                            </ul>
                            <div className="panel-footer">
                                <button onClick={self._addSub.bind(self,index)} className="btn btn-default btn-xs">
                                    Add SubMenu
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
                    <button onClick={this._save.bind(this)} id="saveBtn" data-loading-text="Saving..." className="btn btn-default btn-sm">Save</button>
                </div>
            </div>
        );
    }
}