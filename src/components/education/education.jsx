import React, { Component } from 'react';

import '../../index.css';

import Header from '../globals/header';
import Navbar from '../globals/navbar';
import Education_Sidebar from './education_sidebar';
import Education_Content from './education_content';

class Education extends Component {
    render () {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <Education_Sidebar />
                <Education_Content />
            </div>
        )

    }
}

export default Education;