import React from 'react'
import './Location.css'
import SimpleHeader from '../../Components/SimpleHeader/SimpleHeader'
import Footer from '../../Components/Footer/Footer'

const Location = () => {
  return (
    <div>
        <SimpleHeader title="Our Locations" />

        <section className="location-section">

        <div className="location-container">

            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>
            <div className="location-box"> <a href='#'>Video Editting in Rohtak </a></div>

        </div>

        </section>

        <div className="footer-div">
            <Footer/>
        </div>
        

    </div>
  )
}

export default Location