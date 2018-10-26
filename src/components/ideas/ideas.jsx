import React, { Component } from 'react';

import '../../index.css';

import Header from '../globals/header';
import Navbar from '../globals/navbar';
import Ideas_Sidebar from './ideas_sidebar';
import Ideas_Content from './ideas_content';

class Ideas extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <Ideas_Sidebar />
                <Ideas_Content />
            </div>
        )

    }
}

export default Ideas;