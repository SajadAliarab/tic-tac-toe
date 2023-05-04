import React, { useState } from 'react';

const Square = () => {
    const [value , setValue]= useState(null);
    const handleClick= () => {
        setValue('X')
    }
    return (
    
            <button className='square' style={{width:"50px" , height:"50px" , fontSize:"30px"}} onClick={handleClick}>{value}</button>
     );
}
 
export default Square ;