import React, { useEffect, useState } from 'react'
import './Location.css'
import SimpleHeader from '../../Components/SimpleHeader/SimpleHeader'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const Location = () => {

  const [locations,setLocations] = useState([])

  useEffect(()=>{

    const fetchLocations = async()=>{

      try{

        const res = await fetch("http://localhost:5000/api/location/public")
        const data = await res.json()

        setLocations(data)

      }catch(err){
        console.log(err)
      }

    }

    fetchLocations()

  },[])


  return (
    <div>

      <SimpleHeader/>

        <section className="banner-section">

          <div className="banner-overlay"></div>

          <div className="banner-content">

              <h1 className="banner-title">Our Locations</h1>

              <p className="banner-breadcrumb">
                  Home <FaArrowRightLong />
              our locations
              </p>

          </div>   

        </section>

      <section className="location-section">

        <div className="location-container">

          {locations.map((item)=>(
            
            <div className="location-box" key={item._id}>

              <Link to={`/${item.slug}`}>
                {item.seoTitle}
              </Link>

            </div>

          ))}

        </div>

      </section>

      <div className="footer-div">
        <Footer/>
      </div>

    </div>
  )
}

export default Location