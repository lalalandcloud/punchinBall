import './progressB.css'
import { useState } from 'react'

function ProgressB(){

    const [barVie, setBarVie] = useState(100)
    const punch10 = () => {
    setBarVie(Math.max(barVie -10,0))
    }

    return (
        <div id='barreVie'>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
            <div className="un"></div>
        </div>
    )
}

export default ProgressB