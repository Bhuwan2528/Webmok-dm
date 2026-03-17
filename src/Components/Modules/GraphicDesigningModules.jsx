import React from 'react'
import './Modules.css'

import {
  FaPaintBrush,
  FaPalette,
  FaImage,
  FaPenNib,
  FaLayerGroup,
  FaFont,
  FaMagic,
  FaLaptopCode,
  FaInstagram,
  FaAd,
  FaPrint,
  FaObjectGroup,
  FaVectorSquare,
  FaBrain,
  FaUserTie,
  FaCloudUploadAlt
} from "react-icons/fa";

const modules = [
  // 🎯 Basics
  { icon: <FaPaintBrush />, name: "Introduction to Graphic Designing" },
  { icon: <FaLaptopCode />, name: "Design Software Overview (Photoshop, Illustrator, Canva)" },
  { icon: <FaPalette />, name: "Understanding Colors & Color Theory" },

  // ✏️ Design Fundamentals
  { icon: <FaFont />, name: "Typography Basics (Fonts, Pairing, Hierarchy)" },
  { icon: <FaObjectGroup />, name: "Layout & Composition Principles" },
  { icon: <FaLayerGroup />, name: "Working with Layers & Elements" },

  // 🖼️ Tools & Techniques
  { icon: <FaImage />, name: "Image Editing & Retouching (Photoshop)" },
  { icon: <FaVectorSquare />, name: "Vector Designing (Illustrator)" },
  { icon: <FaPenNib />, name: "Pen Tool Mastery" },

  // 🎨 Creative Design
  { icon: <FaMagic />, name: "Poster & Banner Designing" },
  { icon: <FaAd />, name: "Social Media Creatives (Instagram Posts, Ads)" },
  { icon: <FaInstagram />, name: "Reels Covers & Thumbnails Design" },

  // 🏢 Branding
  { icon: <FaBrain />, name: "Logo Designing (Concept to Final)" },
  { icon: <FaUserTie />, name: "Brand Identity Design (Business Cards, Kits)" },
  { icon: <FaPalette />, name: "Color Psychology in Branding" },

  // 🖨️ Print & Advanced
  { icon: <FaPrint />, name: "Print Design (Flyers, Brochures, Posters)" },
  { icon: <FaMagic />, name: "Advanced Effects & Manipulation" },
  { icon: <FaLayerGroup />, name: "Mockups & Presentation" },

  // 🚀 Professional Skills
  { icon: <FaAd />, name: "Ad Creatives (High Converting Designs)" },
  { icon: <FaBrain />, name: "Creative Thinking & Design Strategy" },
  { icon: <FaUserTie />, name: "Client Brief Understanding" },

  // 💼 Freelancing & Export
  { icon: <FaCloudUploadAlt />, name: "Export Settings (Web, Print, Formats)" },
  { icon: <FaLaptopCode />, name: "Freelancing & Portfolio Building" }
];

const GraphicDesigningModules = () => {
  return (
    <div>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            Graphic Designing Course Modules
          </h2>

          <p className="modules-desc">
            Our Graphic Designing course helps you master creative design skills from basics to advanced.
            Learn industry tools like Photoshop and Illustrator, understand color theory, typography,
            branding, and create professional designs for social media, ads, and print. This course is
            focused on practical learning to help you build a strong portfolio and work with real clients.
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

export default GraphicDesigningModules