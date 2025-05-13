import './progressB.css'
import { useState } from 'react'

function ProgressB(){
    const [barVie, setBarVie] = useState(100)
    setBarVie(Math.max(barVie -10,0))
    return (
        <div id='barreVie'>
            <div id="1"></div>
            <div id="2"></div>
            <div id="3"></div>
            <div id="4"></div>
            <div id="5"></div>
            <div id="6"></div>
            <div id="7"></div>
            <div id="8"></div>
            <div id="9"></div>
            <div id="10"></div>
        </div>
    )
}

export default ProgressB