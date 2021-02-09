import React, { useState } from 'react';
import './ButtonStyle.css'

function Button_Comp({children}){
    const [clickedStyle, setClickedStyle] = useState('button button-notClicked')
    const [isOn, setIsOn] = useState(true)
    const [slider, setSlider] = useState('slider slider-unExtended')
    function ButtonHandler() {
        setIsOn(prevCheck => !prevCheck);
        if(isOn === true) {
            setClickedStyle('button button-clicked')
            ButtonEffect = ('button-effect')
            // setSlider('slider slider-extended')
        }
        else if (isOn === false) {
            setClickedStyle('button button-notClicked')
            var ButtonEffect = ('');
            // setSlider('slider slider-unExtended')
        }
        else {

        }
    }

    return(
        <div class='button-body'>
            <div>
                <button class={clickedStyle}
                onClick={() => ButtonHandler()}>
                    <span>{children}</span>
                    <div class={clickedStyle}></div>
                </button>
            </div>
            
        </div>
    )
}

export default Button_Comp;