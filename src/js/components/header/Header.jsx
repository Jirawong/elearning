import './header.scss';

import React from 'react';
import Button from '../button/Button';
import Search from '../search/Search';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-inner flex">
                    <Button icon="bars">Browse Courses</Button>
                    <Search />
                    e-Learning
                </div>
            </div>
        );
    }
}

export default Header;