import React, { useState } from 'react';

const Square = ({value}) => {
    const [click , setClick]= useState(null);
    const handleClick= () => {
        console.log('Clicked');
    }
    return (
    
            <button className='square' onClick={handleClick}>{value}</button>
     );
}
 
export default Square ;