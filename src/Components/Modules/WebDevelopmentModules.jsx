import React from 'react'
import './Modules.css'

import {
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCode,
  FaTools,
  FaMobileAlt,
  FaSearch,
  FaBug,
  FaGitAlt,
  FaCloudUploadAlt,
  FaProjectDiagram,
  FaBrain
} from "react-icons/fa";

const modules = [
  // 🎯 Basics
  { icon: <FaLaptopCode />, name: "Introduction to Web Development" },
  { icon: <FaHtml5 />, name: "HTML5 (Structure of Web Pages)" },
  { icon: <FaCss3Alt />, name: "CSS3 (Styling & Layouts)" },

  // 🎨 Advanced Designing
  { icon: <FaCss3Alt />, name: "Flexbox & Grid (Modern Layouts)" },
  { icon: <FaMobileAlt />, name: "Responsive Web Design" },
  { icon: <FaCode />, name: "UI/UX Basics for Developers" },

  // ⚡ JavaScript
  { icon: <FaJs />, name: "JavaScript Basics & DOM Manipulation" },
  { icon: <FaJs />, name: "ES6+ Advanced Concepts" },
  { icon: <FaBug />, name: "Debugging & Problem Solving" },

  // ⚛️ Frontend Development
  { icon: <FaReact />, name: "React JS Fundamentals" },
  { icon: <FaReact />, name: "Components, Props, State" },
  { icon: <FaReact />, name: "Hooks (useState, useEffect etc.)" },

  // 🔗 Backend Development
  { icon: <FaNodeJs />, name: "Node.js Basics" },
  { icon: <FaServer />, name: "Express.js (APIs Development)" },
  { icon: <FaDatabase />, name: "MongoDB (Database Handling)" },

  // 🔥 MERN Stack
  { icon: <FaProjectDiagram />, name: "Full Stack MERN Projects" },
  { icon: <FaServer />, name: "REST APIs & CRUD Operations" },
  { icon: <FaDatabase />, name: "Authentication (JWT, Login System)" },

  // ⚙️ Tools & Optimization
  { icon: <FaGitAlt />, name: "Git & GitHub (Version Control)" },
  { icon: <FaTools />, name: "Development Tools (VS Code, Extensions)" },
  { icon: <FaSearch />, name: "SEO Basics for Developers" },

  // 🚀 Deployment & Real World
  { icon: <FaCloudUploadAlt />, name: "Deployment (Vercel, cPanel, Hosting)" },
  { icon: <FaProjectDiagram />, name: "Real World Projects (Portfolio, Dashboard)" },
  { icon: <FaBrain />, name: "Freelancing & Client Projects" }
];

const WebDevelopmentModules = () => {
  return (
    <div>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            Web Development Course Modules (MERN Stack)
          </h2>

          <p className="modules-desc">
            Our Web Development course covers everything from basic website designing to advanced
            full stack development using the MERN stack. Learn HTML, CSS, JavaScript, React, Node.js,
            Express, and MongoDB to build dynamic, responsive, and scalable web applications.
            This course focuses on real-world projects, deployment, and freelancing skills to make
            you job-ready and client-ready.
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

export default WebDevelopmentModules