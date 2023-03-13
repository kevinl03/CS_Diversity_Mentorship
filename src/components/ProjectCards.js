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
                            text='Choosing a path was hard for me, and I am determined to help others who share the same struggles'
                            label='Andrea'
                            path='https://www.linkedin.com/in/andreashao/'
                        />
                        <CardItem
                            src='images/1599342878551-modified.png'
                            text="Coding was difficult for me initially, but I realized that it was the right path for me!"
                            label='Joshua'
                            path='https://www.linkedin.com/in/joshuayellowley/'
                        />
                        <CardItem
                            src='images/image-modified.png'
                            text='Finding a job as an immigrant from Russia was challenging, yet I found coding as my passion during the process'
                            label='Svetlana'
                            path='https://www.linkedin.com/in/andreashao/'/>

                            
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default ProjectCards;