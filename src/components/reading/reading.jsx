import React, { Component } from 'react';

import '../../index.css';

import Header from '../globals/header';
import Navbar from '../globals/navbar';
import Reading_Sidebar from './reading_sidebar';
import Reading_Content from './reading_content';

class Reading extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <Reading_Sidebar />
                <Reading_Content />
            </div>
        )

    }
}

export default Reading;