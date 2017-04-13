/**
 * Created by Jack on 4/1/2017.
 */

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Sidebar from './sidebar/sidebar'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.status = {
        }
    }

    render() {

        return (
            <BrowserRouter>
                <div className="site-wrapper">
                    <Sidebar/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;