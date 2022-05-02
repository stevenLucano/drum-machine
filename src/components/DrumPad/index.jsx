import React from 'react'
import './styles.scss'

const DrumPad = ({letter, audio, fnc, act, des, mode, vol, drum}) => {

    const btnDown = () => {
        const btn = document.getElementById(`key-${letter}`);
        btn.style.background = '#3d5afe';
        btn.style.boxShadow = 'none';
        btn.style.transition = '0.2s';
        fnc(mode===1?audio[0][0]:audio[1][0]);
    }

    const btnUp= () => {
        const btn = document.getElementById(`key-${letter}`);
        btn.style.background = '#4fc3f7';
        btn.style.boxShadow = '3px 3px 6px black';
        btn.style.transition = '0.2s';
    }

    return (
        <div 
            className='drum-pad' 
            id={`key-${letter}`}
            onMouseDown={() => {
                const audioS = document.getElementById(letter);
                audioS.pause();
                audioS.currentTime = 0;
                if(drum){
                    audioS.volume = vol;
                    audioS.play()
                }
                btnDown();
                act();
            }}
            onMouseUp={() => {
                btnUp();
                // des();
            }}
            onTouchStart={()=>{
                act();
                btnDown();
            }}
            onTouchEnd={()=>{
                // des();
                btnUp();
            }}
            onMouseOut={btnUp}
            
            >
            <audio id={letter} className="clip" src={
                mode===1?audio[0][1]:audio[1][1]
                }></audio>
            <h6>{letter}</h6>
        </div>
    )
}

export default DrumPad
