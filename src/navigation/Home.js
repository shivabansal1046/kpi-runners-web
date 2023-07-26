import React from 'react'
import Fmpic from '../assets/images/FM pic1.jpg'
import cteam from '../assets/images/cricket team.jpg'
import stsession from '../assets/images/ST.jpeg'
import 'react-google-photo/styles.css';

const Home = () => {

  const [open, setOpen] = React.useState(true);
  const images= [Fmpic, cteam, stsession]


  return (
      <>
        <div>
          <h1>Welcome to the Pi Runner site</h1>
        </div>
        <div >
          {images.map(x => <img src = {x} className="home-images" alt="logo" />)} 
          
        </div>
      </>
  )
}

export default Home