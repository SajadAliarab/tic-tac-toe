import React, {useState} from 'react';
import Square from './Square';

const Board = () => {
    const[xIsNext,setIsNext] = useState(true);
    const[square , setSquare]= useState(Array(9).fill(null));
    const calculateWinner=(square) => {
        const lines =[
            [0,1,2],
            [3,4,5],
            [6,7.8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,8]
        ];
        console.log(square);
        for(let i =0; i<lines.length; i++){
            const [a,b,c]=lines[i];
            console.log(square[a,b,c]);
            if(square[a] && square[a]===square[b]&&square[b]===square[c]){
                return square[c];
            }
        }
       return null; 
    }
    const winner = calculateWinner(square);
    let status;
    if(winner){
        status= "winner:"+winner;
    }else{
        status= "Next Player:" + (xIsNext ? "X" : "O")
    }
    const handleClick= (i) => {
        const nextSquare=square.slice();
        if(square[i] || calculateWinner(square)){
            return;
        }
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
        <text>{status}</text>
            <div style={{display:"flex"}}>
                <Square value={square[0]} onSquareClick={()=> handleClick(0)}/>
                <Square value={square[1]} onSquareClick={()=> handleClick(1)}/>
                <Square value={square[2]} onSquareClick={()=> handleClick(2)}/>
            </div>
            <div style={{display:"flex"}}>
                <Square value={square[3]} onSquareClick={()=> handleClick(3)}/>
                <Square value={square[4]} onSquareClick={()=> handleClick(4)}/>
                <Square value={square[5]} onSquareClick={()=> handleClick(5)}/>
            </div>
            <div style={{display:"flex"}}>
                <Square value={square[6]} onSquareClick={()=> handleClick(6)}/>
                <Square value={square[7]} onSquareClick={()=> handleClick(7)}/>
                <Square value={square[8]} onSquareClick={()=> handleClick(8)}/>
            </div>
        </div>
     );
}
 
export default Board;