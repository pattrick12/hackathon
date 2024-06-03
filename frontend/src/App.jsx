import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import SignUp from './components/signUp'

function App() {
  
  const [login, setLogin] = useState(false)
  const [home, setHome] = useState(true)
  const [about, setAbout] = useState(false)
  const [signUp, setSignUp] = useState(false)

  return (
    <>
      <Navbar login={login} setLogin={setLogin} home={home} setHome={setHome} about={about} setAbout={setAbout} signUp={signUp} setSignUp={setSignUp}/>
      <Home home={home}/>
      <Login login={login} setLogin={setLogin}/>
      <About about={about}/>
      <SignUp signUp={signUp}/>

    </>
  )
}

export default App
