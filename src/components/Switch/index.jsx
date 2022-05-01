import React, { useState } from 'react';
import './styles.scss';

const Switch = ({title,fnc,act,des, fnmain}) => {
    
    const message = (idBtn) => {
        const btn = document.getElementById(idBtn);
        if(idBtn === 'btn-Power') {
            return btn.classList.contains('on') ? 'Apagado' : 'Encendido'
        } else if(idBtn === 'btn-Bank'){
            return btn.classList.contains('on') ? 'Heater Kit' : 'Smooth Piano Kit'
        }
    }

    const changeBtn = (idBtn) => {
        const btn = document.getElementById(idBtn);
        btn.classList.toggle('on');
        if(idBtn === 'btn-Power'){
            fnmain();
        }
    }
    
    return (
        <div className='container'>
            <p className='title'>
                {title}
            </p>
            <div 
                className={title=='Power'?'switch on':'switch'} 
                id={`btn-${title}`} 
                onClick={() => {
                    changeBtn(`btn-${title}`);
                    }}
                onMouseDown={() => {
                    if(title === "Power"){
                        fnc(message(`btn-${title}`),true);
                        act(true);
                    } else {
                        fnc(message(`btn-${title}`));
                        act();
                    }
                }}
                onMouseUp={() => {
                    if(title === "Power"){
                        des(true);
                    } else {
                        des();
                    }
                }}
                    >
                <div className='switch-btn'></div>
            </div>
        </div>
    )
}

export default Switch
