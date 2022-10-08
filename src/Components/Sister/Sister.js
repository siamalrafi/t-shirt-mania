import React, { useContext } from 'react';
import { MonyContaxt } from '../GrandPa/GrandPa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(MonyContaxt)
    return (
        <div>
            <h1>Sister</h1>
            <p><small>House :{house}</small></p>
            <p><small>Money {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000</button>

        </div>
    );
};

export default Sister;