import React, {useState} from 'react';
import Square from './Square';

const Board = () => {
    const[xIsNext,setIsNext] = useState(true);
    const[square , setSquare]= useState(Array(9).fill(null));
    const handleClick= (i) => {
        const nextSquare=square.slice();
        if(xIsNext){
            nextSquare[i]="X";
        }else{
            nextSquare[i]="O"
        }
        setSquare(nextSquare);
        setIsNext(!xIsNext);
    }
    return ( 
        <div>
            <div>
                <Square value={square[0]} onSquareClick={()=> handleClick(0)}/>
                <Square value={square[1]} onSquareClick={()=> handleClick(1)}/>
                <Square value={square[2]} onSquareClick={()=> handleClick(2)}/>
            </div>
            <div>
                <Square value={square[3]} onSquareClick={()=> handleClick(3)}/>
                <Square value={square[4]} onSquareClick={()=> handleClick(4)}/>
                <Square value={square[5]} onSquareClick={()=> handleClick(5)}/>
            </div>
            <div>
                <Square value={square[6]} onSquareClick={()=> handleClick(6)}/>
                <Square value={square[7]} onSquareClick={()=> handleClick(7)}/>
                <Square value={square[8]} onSquareClick={()=> handleClick(8)}/>
            </div>
        </div>
     );
}
 
export default Board;