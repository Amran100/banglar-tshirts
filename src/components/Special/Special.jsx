import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angty = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Ring : {angty}</p>
        </div>
    );
};

export default Special;<h2>Special</h2>