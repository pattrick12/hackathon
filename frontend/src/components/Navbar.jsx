import React from 'react'
import './Navbar.css'
import Logo from '../assets/Logo.svg'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>Buildinect</h1>
            </div>
            <div className="links">
                <ul className='list-links'>
                    <li><button className='Btn'>Home</button></li>
                    <li><button className='Btn'>About</button></li>
                    <li><button className='Btn'>Log In</button></li>
                    <li><button className='signUpBtn'>Sign Up</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
