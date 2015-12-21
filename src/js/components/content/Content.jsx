import './content.scss';

import React from 'react';
import Menu from '../menu/Menu';

export default class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="main-content">
                    <div className="wrapper-left">
                        <Menu />
                    </div>
                    <div className="wrapper-right flex">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}