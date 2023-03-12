import React from 'react';
import ProjectCards from '../ProjectCards';
import '../../App.css';
//import Cards from '../Cards';

function Projects() {
    return (
        <>
            <h1 className='projects'>
                MEET THE MENTORS
            </h1>
            <p className='page_description'>
                    We are a passionate team of experienced mentors dedicated to promoting diversity in computer science by tutoring high school
                    students. Our goal is to create a safe and supportive learning environment for all students, tailoring our sessions to meet 
                    their individual needs. Join us today and be a part of our community of learners working towards a brighter future

            </p>
            <ProjectCards />
        </>
    );
}

export default Projects;