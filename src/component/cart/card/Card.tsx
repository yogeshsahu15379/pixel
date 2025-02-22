import React from 'react';
import './Card.css';
import Button from '../../button/Button';

interface CardProps {
  heading: string;
  availbility: string;
  pricing: string;
  setCartData: (data: any) => void;
}

const Card: React.FC<CardProps> = ({ heading, availbility, pricing, setCartData }) => {
  return (
    <div className={`card ${availbility === 'Available' ? 'available' : 'unavailable'}`}>
      <div className="card-header">
        <h2>{heading}</h2>
        {/* <h4>{availbility}</h4> */}
      </div>
      <div className="card-body">
        <p className="pricing"><span className='price'>Price</span> ${pricing}</p>
        <Button
          text="Remove"
          type='button'
          onClick={() => {
            setCartData((prevData: any[]) => {
              return prevData.filter(item => item.heading !== heading);
            });
          }}
        />
      </div>
    </div>
  );
};

export default Card;