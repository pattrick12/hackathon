import React from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>Buildinect</h1>
      </div>
      <div className="links">
        <ul className='list-links'>
          <li><Link to="/"><button className='Btn'>Home</button></Link></li>
          <li><Link to="/about"><button className='Btn'>About</button></Link></li>
          <li><Link to="/login"><button className='Btn'>Log In</button></Link></li>
          <li><Link to="/signup"><button className='signUpBtn'>Sign Up</button></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
