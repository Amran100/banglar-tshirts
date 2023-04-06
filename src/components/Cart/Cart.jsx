import React from 'react';
import './Cart.css'

const Cart = ({cart , handleRemoveFromCart}) => {
    let messege;
    if(cart.length === 0){
        messege = <p>Please add someThig</p>
    }
    else{
        messege = <div>
            <h3>Boroloxxxxx</h3>
        <p><small>Thanks for wasting money</small></p>
        </div>
    }
    return (
        <div>
          <h2 className={cart.length === 1 ? 'red' : 'green'}>Order summery : {cart.length}</h2> 
          <p className={`bold ${cart.length === 4 ? 'yellow' : 'red'}`}>Add More</p>
          {
            cart.length>2 
            ? <h3 className='green'>Aroo kino !!</h3>
            : <span>fokira</span>
          } 
          {
            messege
          }
          {
            cart.map(tshirt => <p 
                key={tshirt._id}
            >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
          }
          {
            cart.length === 2 && <p>Double Bonus !!!</p>
          }
          {
            cart.length === 3 || <h4>Thinta toh hoilo nah </h4>
          }
        </div>
    );
};

export default Cart;<h2>Order summery</h2>