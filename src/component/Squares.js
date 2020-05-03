import React from 'react'

const Squares=({value,onClick})=> {
    const markerClass = value== "X" ? "x" :(value=="O") ? "circle" : "";
    
    return (
            <button className={`cell ${markerClass}`} onClick={() => onClick()}></button>
    )
}

export default Squares;