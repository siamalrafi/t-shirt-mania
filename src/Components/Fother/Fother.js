import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import Myself from '../Myself/Myself';

const Fother = ({ house, }) => {
    return (
        <div>
            <h1>Fother</h1>
            <p><small>House : {house}</small></p>
            <section>
                <Myself house={house} ></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Fother;