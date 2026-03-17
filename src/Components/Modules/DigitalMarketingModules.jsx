import React from 'react'
import './Modules.css'
import {
  FaSearch,
  FaLaptopCode,
  FaBullhorn,
  FaChartLine,
  FaShareAlt,
  FaShoppingCart,
  FaEnvelope,
  FaVideo,
  FaPaintBrush,
  FaWordpress,
  FaMobileAlt,
  FaUsers,
  FaBrain
} from "react-icons/fa";

const modules = [
  { icon: <FaBullhorn />, name: "Digital Marketing Overview" },
  { icon: <FaLaptopCode />, name: "Website Planning & Designing" },
  { icon: <FaSearch />, name: "Search Engine Optimization" },
  { icon: <FaChartLine />, name: "Search Engine Marketing" },
  { icon: <FaShareAlt />, name: "Social Media Optimization" },
  { icon: <FaUsers />, name: "Affiliate Marketing" },

  { icon: <FaUsers />, name: "Online Reputation Management" },
  { icon: <FaChartLine />, name: "Geo Targeting" },
  { icon: <FaShoppingCart />, name: "E-commerce Marketing" },
  { icon: <FaPaintBrush />, name: "Content Marketing" },
  { icon: <FaChartLine />, name: "Web Analytics" },
  { icon: <FaVideo />, name: "Video Marketing" },

  { icon: <FaEnvelope />, name: "Email Marketing" },
  { icon: <FaChartLine />, name: "Google Adsense" },
  { icon: <FaWordpress />, name: "WordPress / Blogging" },
  { icon: <FaMobileAlt />, name: "Mobile Marketing" },
  { icon: <FaUsers />, name: "Freelancing" },
  { icon: <FaBrain />, name: "Experts Change Minds" },

  { icon: <FaUsers />, name: "Cyber Laws" },
  { icon: <FaVideo />, name: "Video Editing" },
  { icon: <FaPaintBrush />, name: "Graphic Designing" },
  { icon: <FaChartLine />, name: "Business Strategy" },
  { icon: <FaChartLine />, name: "Funnel Creation" },
  { icon: <FaUsers />, name: "Doubt Session" },

  { icon: <FaUsers />, name: "Interview Preparation" },
  { icon: <FaUsers />, name: "Client Handling" },
  { icon: <FaPaintBrush />, name: "Proposal Design" },
  { icon: <FaUsers />, name: "Public Speaking" },
  { icon: <FaLaptopCode />, name: "Web Master" },
  { icon: <FaBrain />, name: "AI Tools" }
];  

const DigitalMarketingModules = () => {
  return (
    <div dm-modules>
        
    <section className="modules-section">

      <div className="modules-container">

        <h2 className="modules-title">
          Our Digital Marketing Modules
        </h2>

        <p className="modules-desc">
          Our comprehensive digital marketing program covers industry-relevant
          skills designed to help you become a complete digital professional.
          From SEO and social media to freelancing, AI tools and client handling,
          every module focuses on practical learning and real world application.
        </p>

        <div className="modules-grid">

          {modules.map((module, index) => (
            <div className="module-card" key={index}>
              <div className="module-icon">{module.icon}</div>
              <p className="module-name">{module.name}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
    
    </div>
  )
}

export default DigitalMarketingModules