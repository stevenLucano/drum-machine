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

    const btnDown = (tecla) => {
        const btn = document.getElementById(`key-${tecla}`);
        btn.style.background = '#3d5afe';
        btn.style.boxShadow = 'none';
        btn.style.transition = '0.2s';
        let posicion;
        switch(tecla){
            case 'Q':
                posicion = 0;
                break;
            case 'W':
                posicion = 1;
                break;
            case 'E':
                posicion = 2;
                break;
            case 'A':
                posicion = 3;
                break;
            case 'S':
                posicion = 4;
                break;
            case 'D':
                posicion = 5;
                break;
            case 'Z':
                posicion = 6;
                break;
            case 'X':
                posicion = 7;
                break;
            case 'C':
                posicion = 8;
                break;
            default:
                break;
        }
        changeText(Mode===1?pistas[posicion][0][0]:pistas[posicion][1][0]);
    }

    const btnUp= (tecla) => {
        const btn = document.getElementById(`key-${tecla}`);
        btn.style.background = '#4fc3f7';
        btn.style.boxShadow = '3px 3px 6px black';
        btn.style.transition = '0.2s';
    }

    const presionar_tecla = (e) => {
        if(e.key==='q' || e.key==='w' || e.key==='e' 
            || e.key==='a' || e.key==='s' || e.key==='d' 
            || e.key==='z' || e.key==='x' || e.key==='c'){
            const audioS = document.getElementById(e.key.toUpperCase());
            audioS.pause();
            audioS.currentTime = 0;
            if(OnDrum){
                audioS.volume = Volumen;
                audioS.play()
            }
            btnDown(e.key.toUpperCase());
            onDis();
        }
    }

    const levantar_tecla = (e) => {
        if(e.key==='q' || e.key==='w' || e.key==='e' 
            || e.key==='a' || e.key==='s' || e.key==='d' 
            || e.key==='z' || e.key==='x' || e.key==='c'){
            btnUp(e.key.toUpperCase());
            // offDis();
        }
    }

    window.onkeydown = presionar_tecla;
    window.onkeyup = levantar_tecla;

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
                <DrumPad letter="Q" audio={pistas[0]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="W" audio={pistas[1]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="E" audio={pistas[2]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="A" audio={pistas[3]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="S" audio={pistas[4]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="D" audio={pistas[5]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="Z" audio={pistas[6]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="X" audio={pistas[7]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
                <DrumPad letter="C" audio={pistas[8]} fnc={changeText} act={onDis} des={offDis} mode={Mode} vol={Volumen} drum={OnDrum}/>
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
