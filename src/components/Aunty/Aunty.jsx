import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
           <h2>Aunty</h2> 
           <section className='flex'>
            <Cousin hasFriend={true} ring ={ring}>Nabil</Cousin>
            <Cousin>Nabila</Cousin>
           </section>
        </div>
    );
};

export default Aunty;<h2>Aunty</h2>