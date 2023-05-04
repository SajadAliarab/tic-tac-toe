import React, { useState } from 'react';

const Square = () => {
    const [click , setClick]= useState(null);
    const handleClick= () => {
        setClick('X')
    }
    return (
    
            <button className='square' onClick={handleClick}>{click}</button>
     );
}
 
export default Square ;