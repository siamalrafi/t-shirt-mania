import React from 'react';
import './Cart.css';


const Cart = ({ cart, handleRemoveItem }) => {
    let massage;
    if (cart.length === 0) {
        massage =
            <div>
                <p>Please at least buy one!!!</p>
            </div>
    }
    else {
        massage = <p>Thanks for buy!!!</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h3>
            <h5 className={`bold ${cart.length === 3 ? 'blue' : 'yellow'}`}>Order quantity :{cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt.id}>

                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                massage
            }

        </div >
    );
};

export default Cart;