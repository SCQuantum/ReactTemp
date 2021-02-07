import React, { useState } from 'react';
import './ButtonStyle.css'

function Button_Comp({}){
    const [clicked, setClicked] = useState('button')
    const [slider, setSlider] = useState('slider')

    function ButtonClicked() {
        setClicked('button button-clicked')
        setSlider('slider slider-extended')
    }
    return(
        <div>
            <button class={clicked}
            onClick={() => ButtonClicked()}>Button
            <div class={slider}>

            </div>
            </button>
        </div>
    )
}

export default Button_Comp;