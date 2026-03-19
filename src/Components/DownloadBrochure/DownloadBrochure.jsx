import React, { useState } from "react";
import "./DownloadBrochure.css";
import brochure from "../../assets/webmok-brochure.pdf";
import { FaTimes } from "react-icons/fa";

const DownloadBrochure = ({ onClose }) => {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  const handleDownload = () => {

    if (name === "" || mobile === "" || city === "") {
      alert("Please fill all details first");
      return;
    }

    const message = `New Brochure Enquiry:
Name: ${name}
Mobile: ${mobile}
City: ${city}`;

    const whatsappURL =
      `https://wa.me/919650539195?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    const link = document.createElement("a");
    link.href = brochure;
    link.download = "webmok-brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onClose(); // popup close
  };

  return (
    <div className="brochure-popup">

      <div className="popup-box">

        {/* CLOSE BUTTON */}
        <button className="popup-close" onClick={onClose}>
          <FaTimes />
        </button>

        <h3>Download Brochure</h3>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button className="btn course-btn" onClick={handleDownload}>
          Download Brochure
        </button>

      </div>

    </div>
  );
};

export default DownloadBrochure;