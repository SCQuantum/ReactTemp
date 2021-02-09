import React from 'react'
import './Landing.css'
import Button from './components/Button/Button';

function Landing(){
    
    return(
        // Full-Page Div for Landing Page
        <div className="container"> 
            {/* Side Navbar on Landing Page  */}
            <div id="sideBar">
                 {/* Div Containing All buttons Within the Sidebar */}
                <div className="button-container">
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                </div> 
            </div>
            {/* Div Containing the Different Theme Options in the Horizontal Sliding Section */}
            <div id="themeMenu"> 
                {/* Divs Containing the Class that will Style each Choosable Theme  */}
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