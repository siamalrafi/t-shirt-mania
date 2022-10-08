import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, }) => {
    return (
        <div>
            <h1>Myself</h1>
            <p><small>House : {house}</small></p>
            <Special ></Special>
        </div>
    );
};

export default Myself;