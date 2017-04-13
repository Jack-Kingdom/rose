/**
 * Created by Jack on 4/1/2017.
 */

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import MediumDraftEditor from './editor/medium_editor'

class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <div className="site-wrapper">
                    <MediumDraftEditor/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;