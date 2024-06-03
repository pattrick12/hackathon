import React from 'react'
import './Home.css'

import Consultancy from '../assets/consultancy.svg'
import myb from '../assets/myb.svg'
import roti from '../assets/roti.svg'
import bai from '../assets/bai.svg'
import byb from '../assets/byb.svg'
import he from '../assets/he.svg'
import bea from '../assets/bea.svg'

import Card from './Card'

const Home = ({home}) => {
  return (
    <div className={home?"main":"hidden"}>
      <div className="community">
        <div className="animation">
          <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          </div>
        </div>
        <h1>Join the community</h1>
      </div>
      <div className="cards">
        <div className="row">
        <Card imageSource = {Consultancy} Heading="Free Consultancy" Text = "Book a free consultation with mentors to grow your start-up."/>
        <Card imageSource = {myb} Heading="Market Your Business" Text = "Join our marketing course for experiencing the depth of digital and on-ground marketing."/>
        <Card imageSource = {roti} Heading="Reach out to investors" Text = "Reach out to leading industrialists and start-up leaders through the community developed."/>
        <Card imageSource = {byb} Heading="Boost Your Business" Text = "Get a full package of your customized business support in your area of interest."/>          
        </div>
        <div className="row">
        <Card imageSource = {bai} Heading="Be an Investor" Text = "Become an investor easily on our platform with few simple steps."/>          
        <Card imageSource = {he} Heading="Hire Employees" Text = "Hire employees through looking at our AI - developed statistics of employees at very low salary for college students."/>          
        <Card imageSource = {bea} Heading="Become an Employee" Text = "Connect college students with internships and jobs by using AI to grade their applications"/>
        </div>
      </div>
    </div>
  )
}

export default Home