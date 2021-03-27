import React from 'react'
import Square from './Square';
const style ={
    background:'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight:'800',
    cursor:'pointer',
    outline: 'none'
}


const Board = ({squares, onClick}) => {
    return (
        <div>
            <Square value="1" onClick={() => onClick("Teste")}/>
            <Square value="2" onClick={() => onClick("Teste")}/>
            <Square value="3" onClick={() => onClick("Teste")}/>
            <Square value="4" onClick={() => onClick("Teste")}/>
            <Square value="5" onClick={() => onClick("Teste")}/>
            <Square value="6" onClick={() => onClick("Teste")}/>
            <Square value="7" onClick={() => onClick("Teste")}/>
            <Square value="8" onClick={() => onClick("Teste")}/>
            <Square value="9" onClick={() => onClick("Teste")}/>
        </div>
    )
}
export default Board