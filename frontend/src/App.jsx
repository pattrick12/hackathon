import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import Bookaconsult from './components/Bookaconsult';

import Boost from './components/Boost';
import Calculator from './components/Calculator';
import Mentor from './components/Mentor';
import Myb from './components/Myb';
import Prediction from './components/Prediction';
import ReachOut from './components/reachOut';


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/myb" element={<Myb />} />

          <Route path="/boost" element={<Boost />} />
          <Route path="/Bookaconsult" element={<Bookaconsult />} />

          <Route path="/calculator" element={<Calculator />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/reachout" element={<ReachOut />} />


        </Routes>
        <Footer />
      </div>





    </Router>
  );
}

export default App;
