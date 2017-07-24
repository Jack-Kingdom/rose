/**
 * Created by Jack on 4/1/2017.
 */

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './home'
import Admin from './admin'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            /*
            <BrowserRouter>
                <div className="site-wrapper">
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/admin" component={ Admin }/>
                </div>
            </BrowserRouter>
            */
            Home
        );
    }
}
export default App;