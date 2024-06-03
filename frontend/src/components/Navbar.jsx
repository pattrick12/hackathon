import React from 'react'
import logo from '../assets/Logo.svg'
import './Navbar.css'

const Navbar = ({login, setLogin, home, setHome, about, setAbout, signUp, setSignUp}) => {
  const handleClick = () => {
    setLogin(true)
  }
  const handleHome = () => {
    setHome(true)
    setAbout(false)
    setSignUp(false)
  }
  const handleAbout = () => {
    setHome(false)
    setAbout(true)
    setSignUp(false)
  }
  const handleSignUp = () => {
    setHome(false)
    setAbout(false)
    setSignUp(true)
  }

  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="Logo"/>
        <h1 className="logoText">Buildinect</h1>
      </div>
      <div className="options">
          <ul>
          <li><button onClick={handleHome}>Home</button></li>
          <li><button onClick={handleAbout}>About</button></li>
          <li><button onClick={handleClick}>Log In</button></li>
          <li><button className="signUp" onClick={handleSignUp}>Sign Up</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
