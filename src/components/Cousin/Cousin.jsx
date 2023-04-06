import React from 'react';
import Friends from '../Friends/Friends';

const Cousin = ({childern , hasFriend , ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{childern}</small></p>
           {hasFriend && <Friends ring ={ring}></Friends>}
        </div>
    );
};

export default Cousin;<h2>Cousin</h2>