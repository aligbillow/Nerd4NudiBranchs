import React from "react";
import Tilt from 'react-parallax-tilt';
import nudi from './nudilogo.png';
import './Logo.css';

const Logo = () => {
    return (        
    <div className='center'> 

     <Tilt className="Tilt br2 shadow-2"   
            options={{max: 55}} 
            style={{ height: 250, width: 250 }}>
      <div className="Tilt-inner pa3">
      <img style={{paddingTop: '15px'}} alt='logo' src={nudi}/>
      </div>
    </Tilt>

    
    </div>
    );
} 

export default Logo;
