import './button.scss';

import React from 'react';

class Button extends React.Component {

    render(){

        return (
            <a className="button link no-underline" onClick={this.props.onClick}>
                {this.getIcon()}
                {this.props.children}
            </a>
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