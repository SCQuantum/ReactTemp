import React from 'react';
import Button from './components/Button/Button';
import Slider from './components/Slider/Slider'


function App() {
  return(
    <div>
      <Button/>

      <Slider 
        min="0"
        max="255"
      />
    </div>
  )
}

export default App;
