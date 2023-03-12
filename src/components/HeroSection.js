import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { DownloadButton } from './DownloadButton';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='images/high-school-tutors.jpg' alt = "broken" />
            <h1>CS Diversity Inclusion</h1>
            <p></p>
            <p></p>
            <div className='hero-btns'>


                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    link='/contact'
                >
                    CONTACT US
                </Button>
            </div>
        </div >
    );
}

export default HeroSection;