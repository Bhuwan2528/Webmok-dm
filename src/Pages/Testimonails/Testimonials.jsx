import React, { useState } from 'react';
import SimpleHeader from '../../Components/SimpleHeader/SimpleHeader';
import Footer from '../../Components/Footer/Footer';
import './Testimonials.css';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039811/video1_hktex6.mp4",
    "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039813/video2_um2bq5.mp4",
    "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039812/video3_eqf8nf.mp4",
    "https://res.cloudinary.com/dyiqsf4ze/video/upload/v1773039858/video4_ddh3jo.mp4",
  ];

  const videoList = [...videos, ...videos, ...videos].slice(0, 10);

  return (
    <div>
      <SimpleHeader title="Our Testimonials" />

      <section className="video-section">
        <div className="video-container">
          {videoList.map((video, index) => (
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