import React from 'react';
import './Card.css';

interface CardProps {
    heading: string;
    subheading: string;
    pricing: string;
    discount: string;
}

const Card: React.FC<CardProps> = ({ heading, subheading, pricing, discount }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{heading}</h2>
                <h4>{subheading}</h4>
            </div>
            <div className="card-body">
                <p className="pricing">{pricing}</p>
                <p className="discount">{discount}</p>
            </div>
        </div>
    );
};

export default Card;