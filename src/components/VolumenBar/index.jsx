import React from 'react'
import './styles.scss'

const VolumenBar = ({fnc, act, des, fnVol}) => {

    return (
        <>
            <input
                type="range" 
                name="vol" 
                id="vol" 
                min="0" 
                max="100" 
                onChange={() => {
                    const barVol = document.getElementById('vol');
                    fnVol(barVol.value/100);
                    fnc(`Volumen: ${barVol.value}`)

                    act()
                }}
                onMouseDown={()=>{
                    act();
                }}
                onMouseUp={() =>{
                    des();
                }}
                onTouchStart={()=>{
                    act();
                }}
                onTouchEnd={()=>{
                    des();
                }}
                />
        </>
    )
}

export default VolumenBar
