import React from 'react'
import './Landing.css'
import Button from './components/Button/Button';

function Landing(){
    
    return(
        <div className="container">
            <div id="sideBar">
                <div className="button-container">
                    <Button>Test</Button>
                </div>               
            </div>
            <div id="themeMenu">
                <div className="themeDiv">test theme div</div>
                <div className="themeDiv">test theme div</div>
                <div className="themeDiv">test theme div</div>
                <div className="themeDiv">test theme div</div>
                <div className="themeDiv">test theme div</div>
                <div className="themeDiv">test theme div</div>
                <div className="themeDiv">test theme div</div>
                <div className="themeDiv">test theme div</div>
            </div>
        </div>
    );
}

export default Landing;