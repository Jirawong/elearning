import React from 'react';
import Header from '../components/header/Header';

class App extends React.Component {
    render() {
        return (
            <div id='app-component'>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;