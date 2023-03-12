import React from 'react';
import './ProjectCards.css';
import CardItem from './CardItem';

function ProjectCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/image3-modified.png'
                            text='To-Do List Utilizing MERN Full Stack'
                            label='Andrea'
                            path='https://www.linkedin.com/in/andreashao/'
                        />
                        <CardItem
                            src='images/1599342878551-modified.png'
                            text='Personal Website'
                            label='Joshua'
                            path='https://www.linkedin.com/in/joshuayellowley/'
                        />
                        <CardItem
                            src='images/image-modified.png'
                            text='I love helping!'
                            label='Svetlana'
                            path='https://www.linkedin.com/in/andreashao/'/>

                            
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectCards;