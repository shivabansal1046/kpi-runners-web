import React from 'react'
import Fmpic from '../assets/images/FM pic1.jpg'
import cteam from '../assets/images/cricket team.jpg'
import stsession from '../assets/images/ST.jpeg'
import 'react-google-photo/styles.css';

const Home = () => {

  const images= [Fmpic, cteam, stsession]
  const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };


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