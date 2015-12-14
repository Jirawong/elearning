import './button.scss';

import React from 'react';
import { Link } from 'react-router'

class Button extends React.Component {

    render(){

        return (
            <Link to="home" className="button link" href="#">
                {this.getIcon()}
                {this.props.children}
            </Link>
        );
    }

    getIcon(){
        if(this.props.icon){
            return (
                <i className={'fa fa-'+this.props.icon+' fa-1'} />
            );
        }
    }
}

export default Button;