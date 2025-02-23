import React, { useState } from 'react';
import './Card.css';
import Button from '../button/Button';
import Message from '../message/Message';

interface CardProps {
  heading: string;
  availbility: string;
  pricing: string;
  setCartData: (data: any) => void;
}

const Card: React.FC<CardProps> = ({ heading, availbility, pricing, setCartData }) => {
  const [msg, setMsg] = useState<{ isVisible: boolean; message: string; type: 'success' | 'warning' | 'error' | 'info' }>({isVisible: false, message: '', type: 'success'});

  const handleCloseMessage = () => {
    setMsg({ ...msg, isVisible: false });
  };

  return (
    <>
      {msg.isVisible && <Message type={msg.type} message={msg.message} visible={true} onClose={handleCloseMessage} />}
      <div className={`card ${availbility === 'Available' ? 'available' : 'unavailable'}`}>
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
                  setMsg({isVisible: true, message: 'Item successfully added into cart.', type: 'success'});
                  return [...prevData, { heading, availbility, pricing }];
                }
                setMsg({isVisible: true, message: 'Item already present into cart.', type: 'warning'});

                return prevData;
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Card;