import React, { useState } from "react";
import './PopupForm.css'

const PopupForm = ({ closePopup }) => {

  const [formData,setFormData] = useState({
    name:"",
    phone:"",
    city:""
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const message = `New Enquiry:%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
City: ${formData.city}`

    const whatsappURL = `https://wa.me/919650539195?text=${message}`

    window.open(whatsappURL,"_blank")
  }

  return (
    <div className="popup-overlay">

      <div className="popup-form">

        <button className="close-btn" onClick={closePopup}>
          ✕
        </button>

        <h2>Fill this Form & get a Call Now</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Number"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="Enter Your City"
            onChange={handleChange}
            required
          />

          <button className="submit" type="submit">
            Submit
          </button>

        </form>

      </div>

    </div>
  );
};

export default PopupForm;