import React, { useEffect, useState } from 'react'
import Display from '../Display'
import DrumPad from '../DrumPad'
import Switch from '../Switch'
import VolumenBar from '../VolumenBar'
import './styles.scss'

const DrumMachine = () => {

    let timer;

    const [Text, setText] = useState('');
    const [Active, setActive] = useState(false);
    const [OnDrum, setOnDrum] = useState(true);

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
                console.log("apagar..");
                setActive(false);
            },1000);
        }
    }

    const drumSwitch = () => {
        setOnDrum(!OnDrum);
    }

    return (
        <div id="drum-machine">
            <div id="section-pad">
                <DrumPad letter="Q" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="W" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="E" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="A" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="S" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="D" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="Z" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="X" fnc={changeText} act={onDis} des={offDis}/>
                <DrumPad letter="C" fnc={changeText} act={onDis} des={offDis}/>
            </div>
            <div id="controls-pad">
                <Switch title="Power" fnc={changeText} act={onDis} des={offDis} fnmain={drumSwitch}/>
                <Display message={Text} activated={Active}/>
                <VolumenBar fnc={changeText} act={onDis} des={offDis}/>
                <Switch title="Bank" fnc={changeText} act={onDis} des={offDis}/>
            </div>
        </div>
    )
}

export default DrumMachine
