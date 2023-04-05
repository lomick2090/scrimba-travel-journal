import React from 'react';

export default function Card(props) {

    return (
        <div className="card">
            <img src={`../images/${props.pic}`} alt={`Photo of ${props.place}`}/>
            <div className="cardinfo">
                <h1>{props.place}</h1>
                <h3>{props.startDate + " - " + props.endDate}</h3>
                <p>{props.description}</p>
                <a href={props.google}>Google Maps</a>
            </div>
        </div>
    )
}