import React from 'react'
import './Home.css'
import Logo from '../assets/Logo.svg'

import Consultancy from '../assets/consultancy.svg'
import myb from '../assets/myb.svg'
import bai from '../assets/bai.svg'
import byb from '../assets/byb.svg'
import bea from '../assets/bea.svg'
import he from '../assets/he.svg'
import roti from '../assets/roti.svg'


const Home = () => {
  return (
    <div className="home">
        <div className="head flex align-center">
            <p className='welcome'>Welcome to</p>
            <div className='Logo flex justify-center align-center'>
                <img src = {Logo} alt="Logo Image" />
                <h1>Buildinect</h1>
            </div>
            <p className='subText'>Be you, While we Build You</p>
        </div>
        <div className="card-container">
            <Card image={Consultancy} heading="Free Consultancy"/>
            <Card image={myb} heading="Market Your Business"/>
            <Card image={roti} heading="Reach out to Investors"/>
            <Card image={byb} heading="Boost Your Business"/>
        </div>
        <div className="card-container">
            <Card image={bai} heading="Be an Investor"/>
            <Card image={he} heading="Hire an Employee"/>
            <Card image={bea} heading="Become an Employee"/>
        </div>
    </div>
  )
}

export default Home

export const Card = (props) => {
  return (
    <div className='Card'>
        <img src={props.image} alt="" />
        <p>{props.heading}</p>
    </div>
  )
}
