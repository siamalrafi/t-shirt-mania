import React, { useContext } from 'react';
import { RingContaxt } from '../GrandPa/GrandPa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContaxt);
    return (
        <div>
            <h1>Friend</h1>
            <h1>Friend {house}</h1>
            <button onClick={() => setHouse(house - 1)}>Discrease</button>
        </div>
    );
};

export default Friend;