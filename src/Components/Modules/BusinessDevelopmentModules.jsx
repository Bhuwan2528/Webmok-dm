import React from 'react'
import './Modules.css'

import {
  FaBriefcase,
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaHandshake,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaLightbulb,
  FaSearchDollar,
  FaProjectDiagram,
  FaLaptopCode,
  FaAd,
  FaBrain,
  FaFileSignature,
  FaGlobe
} from "react-icons/fa";

const modules = [
  // 🎯 Basics
  { icon: <FaBriefcase />, name: "Introduction to Business Development" },
  { icon: <FaLightbulb />, name: "Understanding Business Models" },
  { icon: <FaChartLine />, name: "Market Research & Analysis" },

  // 📊 Strategy & Planning
  { icon: <FaProjectDiagram />, name: "Business Strategy & Planning" },
  { icon: <FaSearchDollar />, name: "Identifying Target Audience" },
  { icon: <FaGlobe />, name: "Competitor Analysis" },

  // 📢 Lead Generation
  { icon: <FaBullhorn />, name: "Lead Generation Strategies" },
  { icon: <FaUsers />, name: "Cold Outreach (Calls, Emails, DMs)" },
  { icon: <FaEnvelope />, name: "Email Marketing for Leads" },

  // 🤝 Sales & Communication
  { icon: <FaPhoneAlt />, name: "Sales Calling Techniques" },
  { icon: <FaComments />, name: "Communication & Pitching Skills" },
  { icon: <FaHandshake />, name: "Negotiation & Deal Closing" },

  // 🧑‍💼 Client Handling
  { icon: <FaUserTie />, name: "Client Relationship Management" },
  { icon: <FaUsers />, name: "Handling Objections & Queries" },
  { icon: <FaFileSignature />, name: "Proposal & Contract Basics" },

  // 📈 Growth & Marketing
  { icon: <FaAd />, name: "Using Digital Marketing for Growth" },
  { icon: <FaLaptopCode />, name: "CRM Tools & Automation" },
  { icon: <FaChartLine />, name: "Sales Funnel & Conversion Optimization" },

  // 🚀 Advanced Skills
  { icon: <FaBrain />, name: "Business Psychology & Buyer Behavior" },
  { icon: <FaLightbulb />, name: "Upselling & Cross-Selling Techniques" },
  { icon: <FaProjectDiagram />, name: "Scaling Business Strategies" },

  // 💼 Career & Freelancing
  { icon: <FaUsers />, name: "Freelancing & Client Acquisition" },
  { icon: <FaUserTie />, name: "Interview Preparation" },
  { icon: <FaBriefcase />, name: "Real Client Projects & Case Studies" }
];

const BusinessDevelopmentModules = () => {
  return (
    <div>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            Business Development Course Modules
          </h2>

          <p className="modules-desc">
            Our Business Development course is designed to help you master sales, strategy,
            and client acquisition skills. Learn how to generate leads, pitch effectively,
            close deals, and grow businesses using modern tools and techniques. This course
            focuses on practical knowledge to help you succeed in real-world business and sales roles.
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

export default BusinessDevelopmentModules