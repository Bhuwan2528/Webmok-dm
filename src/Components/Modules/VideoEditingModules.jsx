import React from 'react'
import './Modules.css'

import {
  FaVideo,
  FaCut,
  FaMusic,
  FaImage,
  FaTextHeight,
  FaMagic,
  FaFilm,
  FaLayerGroup,
  FaPalette,
  FaVolumeUp,
  FaLaptopCode,
  FaYoutube,
  FaInstagram,
  FaAd,
  FaCloudUploadAlt,
  FaBrain
} from "react-icons/fa";

const modules = [
  // 🎯 Basics
  { icon: <FaVideo />, name: "Introduction to Video Editing" },
  { icon: <FaLaptopCode />, name: "Editing Software Overview (Premiere Pro / CapCut)" },
  { icon: <FaFilm />, name: "Understanding Timeline & Interface" },

  // ✂️ Editing Fundamentals
  { icon: <FaCut />, name: "Cut, Trim & Split Techniques" },
  { icon: <FaLayerGroup />, name: "Working with Layers & Clips" },
  { icon: <FaMagic />, name: "Basic Transitions & Effects" },

  // 🎨 Visual Enhancement
  { icon: <FaPalette />, name: "Color Correction Basics" },
  { icon: <FaPalette />, name: "Advanced Color Grading (Cinematic Look)" },
  { icon: <FaImage />, name: "Using Images, B-Roll & Overlays" },

  // 🔊 Audio
  { icon: <FaMusic />, name: "Background Music & Sound Effects" },
  { icon: <FaVolumeUp />, name: "Audio Balancing & Noise Removal" },

  // 📝 Text & Motion
  { icon: <FaTextHeight />, name: "Text, Titles & Subtitles" },
  { icon: <FaMagic />, name: "Motion Graphics Basics" },
  { icon: <FaMagic />, name: "Keyframes & Animations" },

  // 📱 Social Media Editing
  { icon: <FaInstagram />, name: "Instagram Reels Editing" },
  { icon: <FaYoutube />, name: "YouTube Video Editing" },
  { icon: <FaVideo />, name: "Short-form Content (Shorts / Reels)" },

  // 💼 Professional Skills
  { icon: <FaAd />, name: "Ad Video Editing (Commercials)" },
  { icon: <FaBrain />, name: "Storytelling & Creative Editing" },
  { icon: <FaFilm />, name: "Cinematic Editing Techniques" },

  // 🚀 Export & Freelancing
  { icon: <FaCloudUploadAlt />, name: "Export Settings (HD, 4K, Formats)" },
  { icon: <FaYoutube />, name: "YouTube Optimization (Thumbnail + Retention)" },
  { icon: <FaLaptopCode />, name: "Freelancing & Client Projects" }
];

const VideoEditingModules = () => {
  return (
    <div>

      <section className="modules-section">

        <div className="modules-container">

          <h2 className="modules-title">
            Video Editing Course Modules
          </h2>

          <p className="modules-desc">
            Our Video Editing course is designed to take you from beginner to advanced level.
            Learn industry-standard tools, creative storytelling, color grading, motion graphics,
            and professional editing techniques used by content creators, filmmakers, and marketers.
            This course focuses on practical skills to help you create high-quality videos for YouTube,
            Instagram, ads, and client projects.
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

export default VideoEditingModules