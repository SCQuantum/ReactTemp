import React, { useState } from 'react';
import './ButtonStyle.css'

function Button_Comp({}){
    const [clickedStyle, setClickedStyle] = useState('button button-notClicked')
    const [isOn, setIsOn] = useState(true)
    const [slider, setSlider] = useState('slider slider-unExtended')
    function ButtonHandler() {
        setIsOn(prevCheck => !prevCheck);
        if(isOn === true) {
            setClickedStyle('button button-clicked')
            // setSlider('slider slider-extended')
        }
        else if (isOn === false) {
            setClickedStyle('button button-notClicked')
            // setSlider('slider slider-unExtended')
        }
        else {

        }
    }

    return(
        <div>
            <div>
                <button class={clickedStyle}
                onClick={() => ButtonHandler()}>
                    
                    <div class={slider}></div>
                </button>
            </div>
            
        </div>
    )
}

export default Button_Comp;