import React, {useState} from 'react'
import './Slider.css'

function Slider({min, max}){
    const [sliderRangeValue, setSliderRangeValue] = useState(0);
    return(
        <div>
            <form action="#">
                <p class="range-field">
                    <input id="rangeSlider" onChange={event => setSliderRangeValue(event.target.value)} type="range" defaultValue="0" min={min} max={max}></input>
                </p>
                <p>
                    <span id="sliderValue" >{sliderRangeValue}</span>
                </p>
            </form>
        </div>
        );
}

export default Slider;