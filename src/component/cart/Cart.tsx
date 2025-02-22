import React from 'react';
import './Cart.css';
import Card from './card/Card';

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

const Cart: React.FC<CartProps> = ({ cards,isShow,setCartData }) => {
    return (
        <>
        <div className={`cart ${isShow ? 'show' : 'hide'}`}>
        <p style={{color:"red"}}>Your Cart</p>

            {cards.length > 0 ? (
                cards.map((data) => (
                    <Card key={data.id} heading={data.heading} availbility={data.availbility} pricing={data.pricing} setCartData={setCartData}/>
                ))
            ) : (
                <p>No Domains avai lable</p>
            )}
        </div>
        </>
    );
};

export default Cart;