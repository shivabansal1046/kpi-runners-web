import logo from './logo.svg';
import pi_runner_logo from './pi_runner_logo.png'
import './App.css';
import Dummy from './playground/Dummy'
import Nav from './components/Nav'
import Promo from './components/Promo'
import Intro1 from './components/Intro1'
import Card from './components/Card'
import Btn from './components/Btn'
import { useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './navigation/Home'
import About from './navigation/About'

function App() {

  function TextInputWithFocusButton() {
    
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }

  function handleClick() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
      }

  return (
    <div className="App">
      <header className="App-header">
        <img src={pi_runner_logo} className="App-logo" alt="logo" />
        <p>
          Run For Life
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About the group
        </a>
      </header>
      <div> 
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
      {/* <button onClick={handleClick}>Guess the number between 1 and 3</button>
      <TextInputWithFocusButton />
      <Dummy name="shiva" company="bp"/>
      <Card h2="This is h2" h3="This is h3" />
      <Card h2="This is h2" h3="This is h3" />
      <Btn /> */}
    </div>
  );
}

export default App;
