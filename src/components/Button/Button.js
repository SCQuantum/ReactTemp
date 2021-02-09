import React, { useState } from 'react';
import './ButtonStyle.css'

function Button_Comp({children}){
    {/* useState Variable used for Toggling the Different Button Styles */}
    const [clickedStyle, setClickedStyle] = useState('button button-notClicked')
    const [isOn, setIsOn] = useState(true)
    {/* Toggles Button Style Based on Rvent Occured: hover/click*/}
    function ButtonHandler() {
        setIsOn(prevCheck => !prevCheck);
        if(isOn === true) {
            setClickedStyle('button button-clicked')
            ButtonEffect = ('button-effect')
        }
        else if (isOn === false) {
            setClickedStyle('button button-notClicked')
            var ButtonEffect = ('');
        }
        else {

        }
    }

    return(
        // Div Containing the Body of the Button
        <div class='button-body'>
            <div>
                {/* Button Tag Which Holds the Constant Contianing the Style for the Button Based on Actions Taken */}
                <button class={clickedStyle}
                // Onlick That Tracks Events Taken on the Button 
                onClick={() => ButtonHandler()}>
                    {/* Text Show in the Button from the Children Prop of the Tag */}
                    <span>{children}</span>
                    {/* Second Div Tag Which Holds the Constant Contianing the Style for the Button Based on Actions Taken */}
                    <div class={clickedStyle}></div>
                </button>
            </div>
            
        </div>
    )
}

export default Button_Comp;