import React, { useContext } from 'react';
import { MonyContaxt } from '../GrandPa/GrandPa';

const Uncle = () => {
    const [money, setMoney] = useContext(MonyContaxt)

    return (
        <div>
            <h1>Uncle</h1>
            <h1>Money :{money}</h1>
        </div>
    );
};

export default Uncle;