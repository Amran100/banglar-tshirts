import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money , setMoney]= useContext(MoneyContext)
    return (
        <div>
           <h2>Uncle</h2> 
           <p>Grandpa Money : {money}</p>
           <button onClick={()=> setMoney(money + 100000)}>Send 1 lak</button>
           <section className='flex'>
            <Cousin>Nibir</Cousin>
            <Cousin>HoiChoi</Cousin>
           </section>
        </div>
    );
};

export default Uncle;<h2>Uncle</h2>