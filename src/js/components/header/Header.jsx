import './header.scss';

import React from 'react';
import Button from '../button/Button';
import Search from '../search/Search';

import AuthenService from '../../services/AuthenService';

class Header extends React.Component {

    logout(e){
        e.preventDefault();
        AuthenService.logout()
    }

    render() {
        return (
            <div className="header">
                <div className="header-inner flex">
                    <Button icon="bars" onClick={this.logout.bind(this)}>Browse Courses</Button>
                    <Search />
                    e-Learning
                </div>
            </div>
        );
    }
}

export default Header;