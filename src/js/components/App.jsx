import React from 'react';
import Header from '../components/header/Header';
import Login from '../components/login/Login';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this._getLoginState();
    }

    _getLoginState() {
        return {'isLoggedIn': false};
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div id='app-component'>
                    <Header />
                    {this.props.children}
                </div>
            );
        } else {
            return <Login />
        }
    }
}