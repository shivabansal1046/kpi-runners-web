
import React from 'react'
import pi_runner_logo from './assets/images/pi_runner_logo.png'
import tshirt from './assets/images/t-shirt.jpeg'
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {Button} from '@mui/material';
import { Send } from '@mui/icons-material';
import Home from './navigation/Home'
import Register from './navigation/Register'
import Events from './navigation/Events'
import MonthlyStats from './navigation/MonthlyStats'
import Stories from './navigation/Stories'
import Footer from './navigation/Footer'
import Athletes from './navigation/Athletes';
import Login from './navigation/Login';
import Gallery from './navigation/Gallery';
import HomePlay from './navigation/HomePlay';
import PiEvents from './navigation/PiEvents';
import Coresel from './components/Corosel';

function App() {

  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="width=device-width, initial-scale=0.41, maximum-scale=1" />
        <div className="App-logo-left">
          <img src={tshirt} className="additional-logo" alt="logo" />
        </div>
        <div>
        <h1> π Runners Club Run For Life </h1>
        <Link to="/login" className="nav-item">
          <Button variant="contained" endIcon={<Send />}> Login </Button>
        </Link> 
        </div>
             
        <div className="App-logo-right">
          <img src={pi_runner_logo} className="App-logo" alt="logo" /> 
        </div>

        

        
      </header>
      
      <div > 
      <nav className="nav">
      
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/gallery" className="nav-item">Gallery</Link>
        <Link to="/register" className="nav-item">Register</Link>
        <Link to="/events" className="nav-item">Events</Link>
        <Link to="/athletes" className="nav-item">Athletes</Link>
        <Link to="/stats" className="nav-item">Stats</Link>
        <Link to="/Stories" className="nav-item">Stories</Link> 
        <Link to="/play" className="nav-item">Play</Link>  
      </nav>
        <Routes> 
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/athletes" element={<Athletes isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
          <Route path="/stats" element={<MonthlyStats isAuth={isAuth} setIsAuth={setIsAuth}/>}></Route>
          <Route path="/Stories" element={<Stories />}></Route>
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
          <Route path="/pievent" element={<PiEvents setIsAuth={setIsAuth}/>} />
          <Route path="/play" element={<Coresel />} />
        </Routes>
      </div>
      < Footer />
    </div>
  );
}

export default App;
