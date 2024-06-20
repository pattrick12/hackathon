import React from 'react'
import './Mentor.css'

const Mentor = () => {
  return (
    <div className='main-mentor'>
        <div className="upper">
            <div className="left-upper">
                <div className="box">
                    <a style={{ fontFamily: 'Poppins', color: 'black' ,fontSize : '30px' }} href="/Bookaconsult">Book your consulation with a mentor</a>
                </div>
            </div>
            <div className="right-upper">
                <span>Secure your consultation with a seasoned mentor to receive personalized guidance and strategies tailored to your specific needs. Take proactive steps towards achieving your goals with expert support at your side.</span>
            </div>
        </div>
        <div className="lower">
            <div className="right-upper">
                <span>Our automated tool empowers you to calculate your growth parameters swiftly and accurately, providing essential insights into your progress. Maximize your potential by leveraging data-driven analysis to optimize your trajectory.</span>
            </div>
            <div className="left-upper">
                <div className="box">
                    <a style={{ fontFamily: 'Poppins', color: 'black' ,fontSize : '30px' }} href="/calculator">Calculate your growth parameters  by our automated tool</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mentor
