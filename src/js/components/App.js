import 'normalize.css'
import 'font-awesome/scss/font-awesome.scss';
import 'styles/app.scss';

import React from 'react';
import Header from './header/Header';

class App extends React.Component {
    render() {
        return (
            <div id='app-component'>
                <Header />
            </div>
        );
    }
}

export default App;