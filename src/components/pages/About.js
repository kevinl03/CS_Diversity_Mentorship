import React from 'react';
import '../../App.css';
import AboutCards from "../AboutCards";

export default function About() {
    return (
        <>
            <h1 className='about'>
                OUR VISION
            </h1>

            <p className='page_description'>
            To create a world where all students, regardless of their background, have access to the resources, role models, and guidance needed to pursue a career in computer science. We aim to inspire and empower underrepresented students to confidently pursue their passion for technology while cultivating a diverse and inclusive community of future tech leaders. By striving towards increasing the representation of diverse perspectives in the field of computer science, we hope to drive innovation and progress within our society.
            </p>
            <AboutCards />
        </>
    );
}