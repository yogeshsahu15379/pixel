import React from 'react';
import './Card.css';
import Button from '../../button/Button';

interface CardProps {
    heading: string;
    availbility: string;
    pricing: string;
}

const Card: React.FC<CardProps> = ({ heading, availbility, pricing }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{heading}</h2>
                <h4>{availbility}</h4>
            </div>
            <div className="card-body">
                <p className="pricing"><span className='price'>Price</span> ${pricing}</p>
                <Button 
                    text="remove" 
                    type='button' 
                    onClick={() => {
                        console.log('removed to Cart');
                    }} 
                />
            </div>
        </div>
    );
};

export default Card;