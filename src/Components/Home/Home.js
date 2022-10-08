import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts.id === tshirt.id);
        if (exists) {
            alert('T Shirt already added')
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }
    const handleRemoveItem = tshirt => {
        const remaining = cart.filter(ts => ts.id !== tshirt.id);
        setCart(remaining);

    }

    return (
        <div className="home-container">
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                        tshirt={tshirt}
                        key={tshirt.id}
                        handleAddToCart={handleAddToCart}
                    >
                    </TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;