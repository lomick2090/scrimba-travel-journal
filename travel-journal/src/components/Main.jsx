import React from 'react';
import data from '../data';
import Card from './Card.jsx';

export default function Main() {
    let cards = data.map(dest => {
        return (
            <Card 
                key={dest.place}
                {...dest}
            />
        
        )
    })

    console.log(cards)
    return (
        <div className='main'>
            {cards}
        </div>
    )
}
