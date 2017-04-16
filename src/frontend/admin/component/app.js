/**
 * Created by Jack on 4/1/2017.
 */

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import MyEditor from './editor'

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <div className="site-wrapper" style={require('./app.less')}>
                    <MyEditor/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;