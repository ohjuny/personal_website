import React, { Component } from 'react';

import '../../index.css';

import Header from '../globals/header';
import Navbar from '../globals/navbar';
import Home_Sidebar from '../home/home_sidebar';
import Biography_Content from './biography_content';

class Biography extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <Home_Sidebar />
                <Biography_Content />
            </div>
        )

    }
}

export default Biography;