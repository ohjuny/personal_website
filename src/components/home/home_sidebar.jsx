import React, { Component } from 'react';

import '../../index.css';

import Slideshow from './slideshow';
import Links from '../globals/links';

class Home_Sidebar extends Component {
    render () {
        return (
            <div className="sidebar">
                <Slideshow />
                <p>(insert witty caption here)</p>
                <br></br>
                <Links />
            </div>
        )
    }
}

export default Home_Sidebar;