import React, { useState } from 'react'
import Display from '../Display'
import DrumPad from '../DrumPad'
import Switch from '../Switch'
import VolumenBar from '../VolumenBar'
import './styles.scss'

const DrumMachine = () => {

    const [Volumen, setVolumen] = useState(50)

    const changeVol = () => {
        const vol = document.getElementById('vol');
        setVolumen(vol.value);
        console.log(Volumen);
    }

    return (
        <div id="drum-machine">
            <div id="section-pad">
                <DrumPad letter="Q"/>
                <DrumPad letter="W"/>
                <DrumPad letter="E"/>
                <DrumPad letter="A"/>
                <DrumPad letter="S"/>
                <DrumPad letter="D"/>
                <DrumPad letter="Z"/>
                <DrumPad letter="X"/>
                <DrumPad letter="C"/>
            </div>
            <div id="controls-pad">
                <Switch title="Power"/>
                <Display vol={Volumen}/>
                <VolumenBar fnc={changeVol}/>
                <Switch title="Bank"/>
            </div>
        </div>
    )
}

export default DrumMachine
