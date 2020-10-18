import React from 'react';
import '../styles/header.css'

const Header = () => (
  <header className='content-info'>
    <figure className='content-info__images'>
      <img
        className='content-info__imagen'
        src='http://images.clipartpanda.com/green-earth-clipart-planet_earth_pastel.png'
        alt='Icono Tierra Png - Planeta Png@pngkit.com'
      />
    </figure>
    <span className='about'>About Us</span>
  </header>
);

export default Header;
