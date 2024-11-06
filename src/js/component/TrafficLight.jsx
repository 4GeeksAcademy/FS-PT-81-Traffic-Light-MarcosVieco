import React, { useState, useEffect } from "react";
import { ChangeButton } from "./ChangeButton"

const TrafficLight = () => {
    const [color, setColor] = useState('')
    const [purple, setPurple] = useState(false)


    return (
        <div className="container wrapper">
            <div className="top-tl bg-dark"></div>
            <div className="middle-tl bg-dark rounded py-3 d-flex flex-column gap-2">
                <div className={`the-light ${color === 'red' ? 'redGlow' : 'redl'}`} onClick={() => setColor('red')}></div>
                <div className={`the-light ${color === 'yellow' ? 'yellowGlow' : 'yellowl'}`} onClick={() => setColor('yellow')}></div>
                <div className={`the-light ${color === 'green' ? 'greenGlow' : 'greenl'}`} onClick={() => setColor('green')}></div>
                {purple && (<div className={`the-light ${color === 'purple' ? 'purpleGlow' : 'purplel'}`} onClick={()=> setColor('purple')}></div>)}
            </div>
            <ChangeButton setColor={setColor} />
            <button onClick={() => setPurple(prev => !prev)}>
                {purple ? "Delete purple" : "Add purple"}
            </button>
        </div>
    )
}
export default TrafficLight