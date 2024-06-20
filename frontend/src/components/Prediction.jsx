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
            <p><b>Note:</b> <br />This has been done by basic data-analytics tools which analyze where your startup is headed too and gives you outputs based on growth of the given years</p>
        </div>
        <div className="review">
            <div className="l">
                <p>Overall-Review</p>
            </div>
            <div className="r">
                <div className="review-box">
                The given data-script utilizes Pandas and Matplotlib to analyze a set of financial data spanning from January 2021 to January 2022. It first calculates key financial metrics such as Market Cap, Revenue Growth Rate, EPS (Earnings Per Share), and P/E Ratio (Price-to-Earnings Ratio) based on provided data for Share Price, Revenues, Net Income, and Shares Outstanding. The script then visualizes these metrics across time using a series of plots: a line plot showing Share Price and Revenues trends, a bar chart illustrating Revenue Growth Rate changes, a line plot displaying Market Cap fluctuations, and a scatter plot depicting P/E Ratio variations. These visualizations provide a clear understanding of the company's financial performance and market valuation dynamics over the specified period.
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
    </div>
  )
}
