import React, { useEffect, useState } from 'react';
import SimpleHeader from '../../Components/SimpleHeader/SimpleHeader';
import Footer from '../../Components/Footer/Footer';
import './Testimonials.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {

  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    const fetchVideos = async () => {

      try {

        const res = await fetch("http://localhost:5000/api/entries");
        const data = await res.json();

        // backend se video urls
        setVideos(data?.video?.videoUrls || []);

      } catch (error) {
        console.log(error);
      }

    };

    fetchVideos();

  }, []);


  return (
    <div>

      <SimpleHeader />


        <section className="banner-section">

          <div className="banner-overlay"></div>

          <div className="banner-content">

              <h1 className="banner-title">Our Testimonials</h1>

              <p className="banner-breadcrumb">
                  Home <FaArrowRightLong />
              our testimonials
              </p>

          </div>   

        </section>


      <section className="video-section">
        <div className="video-container">

          {videos.map((video, index) => (

            <div
              className="video-card"
              key={index}
              onClick={() => setActiveVideo(video)}
            >

              <video
                className="video-preview"
                src={video}
                preload="metadata"
                muted
                playsInline
              />

              <div className="video-overlay"></div>

              <div className="play-button">
                <span>▶</span>
              </div>

            </div>

          ))}

        </div>
      </section>


      {activeVideo && (

        <div
          className="video-modal"
          onClick={() => setActiveVideo(null)}
        >

          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="popup-video"
            />

          </div>

        </div>

      )}

      <div className="footer-div">
        <Footer />
      </div>

    </div>
  );
};

export default Testimonials;