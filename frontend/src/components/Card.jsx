import React, {useState} from 'react'
import './Card.css'
const Card = ({imageSource, Heading, Text}) => {
    return (
        <div className="card">
            <div className="first-content">
                <div className="image">
                    <img src={imageSource} alt="Consultancy" />
                </div>
                <h2>{Heading}</h2>
            </div>
            <div className="second-content">
                <p>
                    {Text}
                </p>
            </div>
        </div>
    )
}

export default Card