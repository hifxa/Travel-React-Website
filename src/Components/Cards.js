import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Your destination country!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/argentina.jpg'
                            text='Explore the marvellous landscapes and the rich culture of Argentina'
                            label='Argentina'
                            path='/destinations'
                        />
                        <CardItem
                            src='images/brazil.jpg'
                            text='Experience football in the home of Christ The Redeemer'
                            label='Brazil'
                            path='/destinations'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/chile.jpg'
                            text='Survey the Easter Islands only in Chile'
                            label='Chile'
                            path='/destinations'
                        />
                        <CardItem
                            src='images/colombia.jpg'
                            text='Indulge in one of the Most Biodiverse Countries of the world'
                            label='Colombia'
                            path='/destinations'
                        />
                        <CardItem
                            src='images/uruguay.jpg'
                            text='Ride through nature in the River of Painted Birds'
                            label='Uruguay'
                            path='/destinations'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;