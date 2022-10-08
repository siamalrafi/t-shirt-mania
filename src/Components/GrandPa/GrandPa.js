import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Fother from '../Fother/Fother';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css';

export const RingContaxt = createContext('Matir Ring');
export const MonyContaxt = createContext(555);

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);

    return (
        <RingContaxt.Provider value={[house, setHouse]}>
            <MonyContaxt.Provider value={ [money, setMoney]}>
                <div className='GrandPa'>
                    <h2>GrandPa</h2>
                    <section className="flex">
                        <Fother house={house} ></Fother>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MonyContaxt.Provider>

        </RingContaxt.Provider>

    );
};

export default GrandPa;