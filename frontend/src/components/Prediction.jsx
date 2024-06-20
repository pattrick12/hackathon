import React from 'react'
import './Prediction.css'

import graph1 from '../assets/Python1.png'
import graph2 from '../assets/Python2.png'
import graph3 from '../assets/Python3.png'
import graph4 from '../assets/Python4.png'

const Prediction = () => {
  return (
    <div className='main-prediction'>
        <p>Here are some of our predictions on the growth of your start-up</p>
        <br /><br />
        <div className="graphs">
            <Graph image = {graph1}/>
            <Graph image = {graph2}/>
            <Graph image = {graph3}/>
            <Graph image = {graph4}/>
        </div>
        <br /><br />
        <div className="note">
            <p><b>Note:</b> <br />This has been done by basic data-analytics tools which analyze where your startup is headed too and gives you proper outputs.</p>
            <button className='btnCR'>Code Reference</button>
        </div>
        <div className="review">
            <div className="l">
                <p>Overall-Review</p>
            </div>
            <div className="r">
                <div className="review-box">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aut iusto sed et beatae? Qui, porro. Nulla, molestiae totam! Amet, impedit! Quisquam illum minus atque dignissimos sequi dolorem iste vitae sunt rerum voluptatibus. Modi ex aliquam quo dignissimos fuga, quia exercitationem earum eveniet necessitatibus autem?
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prediction

export const Graph = ({image}) => {
  return (
    <div className='graph'>
        <img className='graph-img' src={image} alt="" />
        <p>Some text calculated by our tool based on the inputs provided by the user </p>
    </div>
  )
}
