import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay'; 
import Spinner from './Spinner';

class App extends React.Component {
    //don't have to use constructor function!
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } />
        }

        return <Spinner message="Please accept location request" />;
    }

    render() {
       return (
           <div className="border red">
               { this.renderContent() }
           </div>
       )
    }

    componentDidUpdate() {
        console.log('My component was just updated. It re-rendered.');
    };

    componentWillUnmount() {
        console.log('Component removed from the screen, and it has been cleaned up.');
    }
    
    // 3 other lifecycle methods that are used VERY infrequently
    // shouldComponentUpdate
    // getDerivedStateFromProps
    // getSnapshotBeforeUpdate
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);