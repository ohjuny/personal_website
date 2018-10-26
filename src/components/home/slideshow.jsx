import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';

import '../../index.css';

const slideImages = [
    '../../images/ohjun1.jpg',
    '../../images/ohjun2.jpg',
    '../../images/ohjun3.jpg',
    '../../images/ohjun4.jpg',
    '../../images/ohjun5.jpg'
];
   
const properties = {
    duration: 7000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true
}

class Slideshow extends Component {
    render () {
        return (
            <div className="slideshow_container">
                <div className="slideshow">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <img src={require('../../images/ohjun1.jpg')} alt="image" />
                        </div>
                        <div className="each-slide">
                            <img src={require('../../images/ohjun2.jpg')} alt="image" />
                        </div>
                        <div className="each-slide">
                            <img src={require('../../images/ohjun3.jpg')} alt="image" />
                        </div>
                        <div className="each-slide">
                            <img src={require('../../images/ohjun4.jpg')} alt="image" />
                        </div>
                        <div className="each-slide">
                            <img src={require('../../images/ohjun5.jpg')} alt="image" />
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Slideshow;