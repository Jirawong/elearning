import React from 'react';

export default class ViewerJs extends React.Component{

    render(){
        return (
            <iframe src={'/ViewerJS/index.html#../files/'+this.props.url} width='100%' height='358' allowFullScreen webkitallowfullscreen></iframe>
        );
    }
}