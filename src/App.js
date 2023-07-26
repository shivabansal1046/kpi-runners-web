
import pi_runner_logo from './assets/images/pi_runner_logo.png'
import tshirt from './assets/images/t-shirt.jpeg'
import './App.css';
import { useRef } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './navigation/Home'
import Register from './navigation/Register'
import Events from './navigation/Events'
import About from './navigation/About'
import Footer from './navigation/Footer'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="App-logo-left">
          <img src={tshirt} className="additional-logo" alt="logo" />
        </div>

        <h1>
        π Runners Club Run For Life
        </h1> 
      
        <div className="App-logo-right">
          <img src={pi_runner_logo} className="App-logo" alt="logo" /> 
        </div>

        
      </header>
      
      <div> 
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/register" className="nav-item">Register</Link>
        <Link to="/events" className="nav-item">Events</Link>
        <Link to="/about" className="nav-item">About</Link>
      </nav>
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
      < Footer />
    </div>
  );
}

export default App;
