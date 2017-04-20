/**
 * Created by Jack on 4/3/2017.
 */

import React from 'react';
import {Route, Link} from 'react-router-dom'

class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayStatus: 'hide',
        }
    }

    render() {
        return (
            <div className="sidebar-container">

                <div className="sidebar-profile">
                    <img className="sidebar-profile-picture" src={require('./img/profile-picture.jpg')}
                         alt="author's picture"/>
                    <h4 className="sidebar-profile-name">Jack King</h4>
                    <h5 className="sidebar-profile-bio">Software developer</h5>
                </div>

                <ul className="sidebar-buttons">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Categories">Categories</Link></li>
                    <li><Link to="/Tags">Tags</Link></li>
                    <li><Link to="/Archives">Archives</Link></li>
                    <li><Link to="/Search">Search</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>

            </div>
        );
    }
}

export default Sidebar;