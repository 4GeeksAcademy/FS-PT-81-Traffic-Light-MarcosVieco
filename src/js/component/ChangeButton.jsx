import React from "react";

export const ChangeButton = ({setColor}) => {
    const changeColors = () => {
        setColor(firstColor => {
            if (firstColor === 'green') return 'yellow';
            if (firstColor === 'yellow') return 'red';
            return 'green'
        })
    }
    return (
        <button className='mt-4' onClick={changeColors}>Change the light</button>
    )
    }
