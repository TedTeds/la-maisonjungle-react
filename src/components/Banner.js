import React from 'react';
// importation du css banner
import '../styles/Banner.css';
// importation du logo
import logo from '../assets/logo.png'

function Banner() {
  const title = 'La maison jungle';
  
  return (
    <div className="lmj-banner">
                <img src={logo} alt='La maison jungle' className='lmj-logo' />

      <h1>{title}</h1>
    </div>
  );
}

export default Banner;