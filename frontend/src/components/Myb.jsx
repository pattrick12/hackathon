import React from 'react'
import './Myb.css'
import Market from '../assets/myb.png'

const Myb = () => {
  return (
    <div className='myb-main'>
      <div className="left">
        <img src={Market} alt="" />
      </div>
      <div className="right">
        <div className="price">
            <p>For Rs. XXXX</p>
        </div>
        <div className="text">
            <ul>
                <li>Diagnose the strengths and weaknesses of your current marketing strategy.</li>
                <li>Identify areas for improvement across all marketing channels.</li>
                <li>Uncover hidden opportunities to reach new customers and boost sales.</li>
                <li>Develop data-driven recommendations to optimize your marketing efforts.</li>
            </ul>

        </div>
        <button className='submitBtn'>Know more details and Proceed</button>
      </div>
    </div>
  )
}

export default Myb
