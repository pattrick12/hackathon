import React from 'react'
import './Boost.css'

import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import img5 from '../assets/image5.png'

const Boost = () => {
  return (
    <div className='main-boost'>
        <div className="card-container-boost">
            <Card image={img1}/>
            <Card image={img2}/>
            <Card image={img3}/>
        </div>
        <div className="card-container-boost">
            <Card image={img4}/>
            <Card image={img5}/>
        </div>
    </div>
  )
}

export default Boost

export const Card = ({image}) => {
  return (
    <div className='card-boost'>
        <img src={image} alt="" />
        <h3>Rs. XXXX</h3>
    </div>
  )
}
