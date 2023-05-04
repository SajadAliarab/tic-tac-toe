import React, {useState} from 'react';
import Square from './Square';

const Board = () => {
    const[square , setSquare]= useState(Array(9).fill(null));
    return ( 
        <div>
            <div>
                <Square />
                <Square/>
                <Square/>
            </div>
            <div>
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div>
                <Square/>
                <Square />
                <Square/>
            </div>
        </div>
     );
}
 
export default Board;