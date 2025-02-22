import React from 'react';
import './Cart.css';

interface Card {
    id: number;
    title: string;
    description: string;
}

interface CartProps {
    cards: Card[];
    isShow: boolean;
}

const Cart: React.FC<CartProps> = ({ cards,isShow }) => {
    return (
        <>
        <div className={`cart ${isShow ? 'show' : 'hide'}`}>
        <p style={{color:"red"}}>Your Cart</p>

            {cards.length > 0 ? (
                cards.map((card) => (
                    <div key={card.id} className="card">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))
            ) : (
                <p>No Domains avai lable</p>
            )}
        </div>
        </>
    );
};

export default Cart;