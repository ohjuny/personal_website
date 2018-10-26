import React, { Component } from 'react';

import '../../index.css';

import Header from '../globals/header';
import Navbar from '../globals/navbar';
import Home_Sidebar from './home_sidebar';
import Home_Content from './home_content';

class Home extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <Home_Sidebar />
                <Home_Content />
            </div>
        )

    }
}

export default Home;