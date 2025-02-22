import React from 'react';
import './Card.css';
import Button from '../button/Button';

interface CardProps {
  heading: string;
  availbility: string;
  pricing: string;
  setCartData: (data: any) => void;
}

const Card: React.FC<CardProps> = ({ heading, availbility, pricing, setCartData }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{heading}</h2>
        <h4>{availbility}</h4>
      </div>
      <div className="card-body">
        <p className="pricing"><span className='price'>Price</span> ${pricing}</p>
        <Button
          text="Add to Cart"
          type='button'
          onClick={() => {
            // checking if the item is already in the cart
            setCartData((prevData: any[]) => {
              if (!prevData.some(item => item.heading === heading && item.availbility === availbility && item.pricing === pricing)) {
                return [...prevData, { heading, availbility, pricing }];
              }
              return prevData;
            });
          }}
        />
      </div>
    </div>
  );
};

export default Card;