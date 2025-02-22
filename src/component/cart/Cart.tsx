import React from 'react';

interface Card {
    id: number;
    title: string;
    description: string;
}

interface CartProps {
    cards: Card[];
}

const Cart: React.FC<CartProps> = ({ cards }) => {
    return (
        <div>
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
    );
};

export default Cart;