import React from 'react';
import './AboutCards.css';
import CardItem from './CardItem';

function AboutCards() {
    return (
        
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/Diversity.jpg'
                            text='Diversify the under represented population of computer science students'
                            label =' hi'
                                              
                        />
                        <CardItem
                            src='images/Equity.png'
                            text='Equity '
                            label = ' hi'
                            
                            
                        />
                        <CardItem
                            src='images/Inclusivity.jpeg'
                            text='Inclusion'
                            label = 'hi '
                        />
                        <CardItem
                            src='images/Justice.jpg'
                            text='Justice'
                            label = ' hi'
                        />
    
                    </ul>
                </div>
            </div>
        </div>

    

    );
}

export default AboutCards;

/*
<CardItem
                            src='images/Diversity.jpg'
                            text='Royal Conservatory of Music Gr.10 Piano'
                            label='Music'
                            
                        />
                        <CardItem
                            src='images/Equity.png'
                            /*
                            text='Hack-a-Thons'
                            label='Coding'
                            path='https://calhacks.io/'
                            
                        />
                        <CardItem
                            src='images/Inclusivity.jpeg'
                            text='Video Games'
                            label='Social'
                            path='https://store.steampowered.com/'
                        />
                        <CardItem
                            src='images/Justice.jpg'
                            text='Royal Conservatory of Music Gr.10 Piano'
                            label='Music'
                            path='https://www.rcmusic.com/'
                            */
                            
