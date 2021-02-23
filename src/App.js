import React, {useState} from 'react';
import './App.css'
import Button from './components/Button/Button';
import Slider from './components/Slider/Slider'

function App() {
  //useState Variables
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [aboutText, setAboutText] = useState("");
  return(
    <div id="body-container">
      <div id="designerTab">

        <div id="Identity">
          <form>
            <input type="text" id="fn" className="inputStyle" name="fname" placeholder="First Name" onChange={event => setFirstName(event.target.value)}></input>
            <input type="text" id="ln" className="inputStyle" name="fname" placeholder="Last Name" onChange={event => setLastName(event.target.value)}></input>
          </form>
        </div>

        <div id="Contact">
          <form>
            <input type="text" id="num" className="inputStyle" name="num" placeholder="Phone Number" onChange={event => setPhoneNumber(event.target.value)}></input>
            <input type="text" id="email" className="inputStyle" name="email" placeholder="Contact Email" onChange={event => setEmail(event.target.value)}></input>
          </form>
        </div>

        <div id="AboutMe">
          <form onChange={event => setGender(event.target.value)}>
            <p><input type="radio" id="male" name="gender" value="Male"></input>
            <label for="male">Male</label></p>
            <p><input type="radio" id="female" name="gender" value="Female"></input>
            <label for="female">Female</label></p>
            <p><input type="radio" id="other" name="gender" value="Other"></input>
            <label for="other">Other</label></p>
          </form>
          <form>
            {/* Simon Birthday Algorithm  */}
          </form>
          <form>
            <input type="text" id="abp" className="inputStyle" name="abParagraph" placeholder="A Little About You..." onChange={event => setAboutText(event.target.value)}></input>
          </form>
        </div>

        <div id="Education">
          <form>
          </form>
        </div>

        <div id="Experience">
          <form>
          </form>
        </div>

        <div id="Projects">
          <form>
          </form>
        </div>

        <div id="Pictures">
          <form>
          </form>
        </div>

      </div>
      <div id="previewTab">
        <p>{firstName} {lastName}</p>

        <p>{phoneNumber} {email}</p>

        <p>{gender}</p>

        <p>{/*Simon Birthday Algoritm*/}</p>

        <p>{aboutText}</p>
      </div>
    </div>
  )
}

export default App;
