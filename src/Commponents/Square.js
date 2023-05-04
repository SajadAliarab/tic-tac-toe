import React, { useState } from 'react';

const Square = ({value , onSquareClick}) => {

    return (
    
            <button className='square' style={{width:"50px" , height:"50px" , fontSize:"30px"}} onClick={onSquareClick}>{value}</button>
     );
}
 
export default Square ;