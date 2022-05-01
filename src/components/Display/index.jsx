import React, { useEffect, useState } from 'react'
import './styles.scss'



const Display = ({message, activated}) => {

    // const [Text, setText] = useState(message);
    // const [Active, setActive] = useState(true);

    
    return (
        <div id="display"><p>{activated?`${message}`:''}</p></div>
    )
}

export default Display
