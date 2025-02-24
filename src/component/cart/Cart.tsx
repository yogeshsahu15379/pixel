import React from 'react';
import './Cart.css';
import DomainCard from './card/Card';
import Button from '../button/Button';
import Progress from './progress/Progress';

interface Card {
  id: number;
  heading: string;
  availbility: string;
  pricing: string;
}

interface CartProps {
  cards: Card[];
  isShow: boolean;
  setCartData: (data: any) => void;
}

const Cart: React.FC<CartProps> = ({ cards, isShow, setCartData }) => {
  let totalAmount = cards.reduce((acc, item) => acc + parseFloat(item.pricing
  ), 0).toFixed(2);

  // cart status
  const CartLimit = 5; // Cart Limit
  let cartStatus = `${cards.length}/${CartLimit}`;
  
  if (cards.length > CartLimit) {
    cartStatus = "Too many Items in Cart";
  } else if (cards.length === CartLimit) {
    cartStatus = "Cart is Full";
  }

  const removeUnavailableDomains = () => {
    const availableDomains = cards.filter(card => card.availbility === 'Available');
    setCartData(availableDomains);
  };

  const copyHeadingsToClipboard = () => {
    const headings = cards.map(card => card.heading).join(', ');
    navigator.clipboard.writeText(headings).then(() => {
      alert('Headings copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy headings: ', err);
    });
  };

  return (
    <>
      <div className={`cart ${isShow ? 'show' : 'hide'}`}>
        <div className='cart-header'>
          <div className='cart-header-content'>
            <div>
              <h2>Cart</h2>
              <p className='cart-status'>{cartStatus}</p>
            </div>
            <Button text="Copy all Domains" type="button" onClick={() => copyHeadingsToClipboard()} />
            <Button text="clear cart" type="reset" onClick={() => setCartData([])} />
          </div>
          <Progress current={cards.length} limit={CartLimit} />
        </div>
        <div className='cart-body'>
          {cards.length > 0 ? (
            cards.map((data, index) => (
              <div className='cart-card' key={index}>
                <DomainCard heading={data.heading} availbility={data.availbility} pricing={data.pricing} setCartData={setCartData} />
              </div>
            ))
          ) : (
            <p>No Domains available</p>
          )}
        </div>
        <div className='checkout-section'>
          <div>
            <p className='price'><span>Items count: </span>{cards.length}</p>
            <p className='total-amount price'><span>Total: </span>${totalAmount}</p>
          </div>
          <Button text="remove unavailable domains" type="button" onClick={() => removeUnavailableDomains()} />

          <Button text="Purchase" type="button" isDisabled={cards.length === 0 || cards.length > CartLimit} />
        </div>
      </div>
    </>
  );
};

export default Cart;