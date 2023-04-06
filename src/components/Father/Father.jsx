import React from 'react';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
                <Myself ring = {ring}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;