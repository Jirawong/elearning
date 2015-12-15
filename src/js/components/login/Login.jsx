import './login.scss';

import React from 'react';


export default class Login extends React.Component{
    render(){
        return (
            <div className="login flex">
                <div className="box box-shadow">
                    <div className="login-box">
                        <h2 className="box-heading">Mitrphol Competency Lance</h2>
                        <div className="box-wrapper">
                            <div className="box-cols fx">
                                <a href="#"><span className="glyphicon glyphicon-star"></span> Star</a>
                            </div>
                            <div className="box-seperator"></div>
                            <div className="box-cols fx">b</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}