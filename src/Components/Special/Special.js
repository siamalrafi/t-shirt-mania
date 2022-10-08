import React, { useContext } from 'react';
import { RingContaxt } from '../GrandPa/GrandPa';

const Special = () => {

    // This is the Context not from props like ring
    const [house, setHouse] = useContext(RingContaxt);

    return (
        <div>
            <h1>Specia</h1>
            <p><small>Gift {house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Buy</button>
        </div>
    );
};

export default Special;