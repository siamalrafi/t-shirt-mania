import React from 'react';
import './t-shirt.css'



const TShirt = ({ tshirt, handleAddToCart }) => {
    const { id, name, picture, price } = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price : ${price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default TShirt;