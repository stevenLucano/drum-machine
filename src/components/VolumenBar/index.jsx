import React, { useState } from 'react'
import './styles.scss'

const VolumenBar = ({fnc}) => {

    return (
        <>
            <input
                type="range" 
                name="vol" 
                id="vol" 
                min="0" 
                max="100" 
                onChange={() => fnc()}
                />
        </>
    )
}

export default VolumenBar
