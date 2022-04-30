import React, { useState } from 'react';
import './styles.scss';

const Switch = ({title}) => {

    // const [ChangeBtn, setChangeBtn] = useState(false);
    
    const changeBtn = (idBtn) => {
        // console.log("hola bobis")
        // setChangeBtn(!ChangeBtn);
        // console.log(ChangeBtn);
        
        const btn = document.getElementById(idBtn);
        btn.classList.toggle('on');
    }
    return (
        <div className='container'>
            <p className='title'>
                {title}
            </p>
            <div className={title=='Power'?'switch on':'switch'} id={`btn-${title}`} onClick={() => changeBtn(`btn-${title}`)}>
                <div className='switch-btn'></div>
            </div>
        </div>
    )
}

export default Switch
