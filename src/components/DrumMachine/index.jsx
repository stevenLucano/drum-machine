import React, { useState } from 'react'
import Display from '../Display'
import DrumPad from '../DrumPad'
import Switch from '../Switch'
import VolumenBar from '../VolumenBar'
import './styles.scss'

const DrumMachine = () => {

    let timer;

    const pistas = [
        [['Heater 1','https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'],['Chord 1','https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3']],
        [['Heater 2','https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'],['Chord 2','https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3']],
        [['Heater 3','https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'],['Chord 3','https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3']],
        [['Heater 4','https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'],['Shaker','https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3']],
        [['Clap','https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'],['Open HH','https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3']],
        [['Open HH','https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'],['Closed HH','https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3']],
        [['Kick n\' Hat','https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'],['Punchy Kick','https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3']],
        [['Kick','https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'],['Side Stick','https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3']],
        [['Close HH','https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'],['Snare','https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']]
    ];

    const [Text, setText] = useState('');
    const [Active, setActive] = useState(false);
    const [OnDrum, setOnDrum] = useState(true);
    const [Mode,setMode] = useState(1);
    const [Volumen, setVolumen] = useState(0.5);

    const changeText = (message,power=false) => {
        if(OnDrum || power) setText(message);
    }

    const onDis = (power=false) => {
        if(OnDrum || power) {
            clearTimeout(timer);
            setActive(true);
        }
    }

    const offDis = (power=false) => {
        if(OnDrum || power){
            timer = setTimeout(()=>{
                setActive(false);
            },1000);
        }
    }

    const drumSwitch = () => {
        setOnDrum(!OnDrum);
    }

    const changeMode = (mode) => {
        setMode(mode);
    }

    const changeVol = (vol) => {
        setVolumen(vol);
    }

    return (
        <div id="drum-machine">
            <div id="section-pad">
                <DrumPad letter="Q" audio={pistas[0]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="W" audio={pistas[1]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="E" audio={pistas[2]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="A" audio={pistas[3]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="S" audio={pistas[4]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="D" audio={pistas[5]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="Z" audio={pistas[6]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="X" audio={pistas[7]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
                <DrumPad letter="C" audio={pistas[8]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen}/>
            </div>
            <div id="controls-pad">
                <Switch title="Power" fnc={changeText} act={onDis} des={offDis} fnmain={drumSwitch}/>
                <Display message={Text} activated={Active}/>
                <VolumenBar fnc={changeText} act={onDis} des={offDis} fnVol={changeVol}/>
                <Switch title="Bank" fnc={changeText} act={onDis} des={offDis} mode={changeMode}/>
            </div>
        </div>
    )
}

export default DrumMachine
