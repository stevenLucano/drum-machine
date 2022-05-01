import React from 'react'
import './styles.scss'

const DrumPad = ({letter, fnc, act, des}) => {

    

    const btnDown = () => {
        const btn = document.getElementById(`key-${letter}`);
        btn.style.background = 'orange';
        btn.style.boxShadow = 'none';
        btn.style.transition = '0.2s';
        fnc(letter);
    }

    const btnUp= () => {
        const btn = document.getElementById(`key-${letter}`);
        btn.style.background = '#808080';
        btn.style.boxShadow = '3px 3px 6px black';
        btn.style.transition = '0.2s';
    }

    return (
        <div 
            className='drum-pad' 
            id={`key-${letter}`}
            onMouseDown={() => {
                btnDown();
                act();
            }}
            onMouseUp={() => {
                btnUp();
                des();
            }}
            onTouchStart={()=>{
                act();
                btnDown();
            }}
            onTouchEnd={()=>{
                des();
                btnUp()
            }}
            onMouseOut={btnUp}
            >
            <h6>{letter}</h6>
        </div>
    )
}

export default DrumPad
