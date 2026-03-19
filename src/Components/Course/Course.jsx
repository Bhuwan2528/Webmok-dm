import React, { useEffect, useRef, useState } from "react";
import "./Course.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";
import DownloadBrochure from "../DownloadBrochure/DownloadBrochure";

const Course = ({ data, openPopup }) => {

  const containerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
    AOS.refresh();
  }, []);

  const defaultCourses = [
    {
      image: "https://dm-2.vercel.app/assets/digital-COzj8Waf.webp",
      title: "Advanced Digital Marketing Course",
      points: [
        "Social Media Marketing",
        "Pay Per Click",
        "Analytical Tools",
        "Search Engine Optimization",
        "Content Marketing"
      ]
    },
    {
      image: "https://dm-2.vercel.app/assets/graphic-XEemZhzw.png",
      title: "Business & Personality Development",
      points: [
        "Communication Skills",
        "Leadership Qualities",
        "Time Management",
        "Problem-Solving Skills",
        "Confidence Building"
      ]
    },
    {
      image: "https://dm-2.vercel.app/assets/video-Cjx-c4Vz.jpeg",
      title: "Video & Graphic Designing",
      points: [
        "Canva",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Premiere Pro",
        "CapCut"
      ]
    }
  ];

  const courseData = data?.courses || defaultCourses;

  return (
    <div className="courses">

      <h2 data-aos="fade-up">Our Courses</h2>

      <div className="course-container" ref={containerRef}>

        {courseData.map((course, index) => (

          <div className="course" key={index}>

            <span><p>{index + 1}</p></span>

            <img src={course.image} alt="" />

            <h3>{course.title}</h3>

            <ul>
              {course.points.map((point, i) => (
                <li key={i}>
                  <FaArrowRight /> {point}
                </li>
              ))}
            </ul>

            <div className="button-container">

              <button className="btn course-btn" onClick={openPopup}>
                Apply Now
              </button>

              <button
                className="btn course-btn"
                onClick={() => setShowPopup(true)}
              >
                Download Brochure
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* POPUP COMPONENT */}
      {showPopup && (
        <DownloadBrochure onClose={() => setShowPopup(false)} />
      )}

    </div>
  );
};

export default Course;