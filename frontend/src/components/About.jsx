import React from 'react'
import './About.css'
const About = ({ about }) => {

    return (
        <div className={about ? "main-About" : "hidden"}>
            <div className="left">
                <div className="a">
                    <h1 className='title'>About</h1>
                </div>
                <div className="us">
                    <h1 className='title'>Us</h1>
                </div>
            </div>
            <div className="right">
                <p>
                    Welcome to Buildinect, where we believe in empowering the next generation of entrepreneurs. Our mission is to simplify the startup journey and make essential resources, mentorship, and investment opportunities accessible to everyone, regardless of their background or experience.
                    <br />
                    We understand that navigating the startup ecosystem can be overwhelming, especially for newcomers. That’s why we’ve built a comprehensive digital platform designed to bridge the gap between emerging entrepreneurs and the critical support they need to succeed. Our platform is a one-stop hub where aspiring business owners can connect with experienced mentors, find valuable resources, and engage with potential investors.
                    <br />
                    At Buildinect, we prioritize ease of use and accessibility. Our user-friendly interface ensures that even those new to the business world can navigate and utilize our services with confidence. We offer a wealth of insights and practical guidance on starting and managing a business, tailored to help you overcome challenges and achieve your goals.
                    <br />
                    Join us on this exciting journey and let’s turn your entrepreneurial dreams into reality. Together, we can build a vibrant community of innovators, creators, and leaders. Welcome to Buildinect – your partner in entrepreneurial success.
                </p>
            </div>
        </div>
    )
}

export default About
