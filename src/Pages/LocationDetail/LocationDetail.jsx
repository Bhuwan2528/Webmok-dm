import React, { useEffect, useState } from "react";
import "./LocationDetail.css";
import { FaPhone, FaDownload } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import SimpleHeader from "../../Components/SimpleHeader/SimpleHeader";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Bottom from "../../Components/Bottom/Bottom";
import Placement from "../../Components/Placement/Placement";
import Video from "../../Components/Video/Video";
import DownloadBrochure from "../../Components/DownloadBrochure/DownloadBrochure";

import DigitalMarketingModules from "../../Components/Modules/DigitalMarketingModules";
import VideoEditingModules from "../../Components/Modules/VideoEditingModules";
import GraphicDesigningModules from "../../Components/Modules/GraphicDesigningModules";
import BusinessDevelopmentModules from "../../Components/Modules/BusinessDevelopmentModules";
import WebDevelopmentModules from "../../Components/Modules/WebDevelopmentModules";

import dmBanner from '../../assets/dmBanner.png'
import veBanner from '../../assets/veBanner.png'
import gdBanner from '../../assets/gdBanner.png'
import wdBanner from '../../assets/wdBanner.png'
import bdBanner from '../../assets/bdBanner.png'

// =========================
// FIELD BASED MAPPING
// =========================

const bannerMap = {
  "digital marketing": dmBanner,
  "video editing": veBanner,
  "graphic designing": gdBanner,
  "business development": bdBanner,
  "web development": wdBanner,
};

const moduleMap = {
  "digital marketing": DigitalMarketingModules,
  "video editing": VideoEditingModules,
  "graphic designing": GraphicDesigningModules,
  "business development": BusinessDevelopmentModules,
  "web development": WebDevelopmentModules,
};

const LocationDetail = () => {

  const { slug } = useParams();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const SelectedModule = page ? moduleMap[page.field] : null;

  const [showPopup, setShowPopup] = useState(false);


  // =========================
  // FETCH PAGE DATA
  // =========================

  useEffect(() => {

    const fetchPage = async () => {

      try {

        const res = await fetch(
          `https://webmok-dm-backend.onrender.com/api/location/page/${slug}`
        );

        const data = await res.json();

        setPage(data);
        setLoading(false);

      } catch (error) {

        console.log(error);
        setLoading(false);

      }

    };

    fetchPage();

  }, [slug]);


  if (loading) {
    return <div style={{padding:"80px", textAlign:"center"}}>Loading...</div>;
  }


  if (!page) {
    return <div style={{padding:"80px", textAlign:"center"}}>Page not found</div>;
  }


  return (

    <div>

      {/* SEO META TAGS */}

    <Helmet>

    <title>{page.seoTitle}</title>

    <meta
    name="description"
    content={page.metaDescription}
    />

    <meta
    name="keywords"
    content={page.metaKeywords}
    />

    </Helmet>


      <SimpleHeader/>

      {/* ===== Banner Section ===== */}
      <section className="course-banner-section">
        <img
          src={bannerMap[page.field] || dmBanner  }
          alt={page.field}
          className="course-banner-image"
        />
      </section>

      {/* ===== Intro Section ===== */}
      <section className="intro-section">

        <div className="intro-container">

          <h2 className="intro-title">
            {page.seoTitle}
          </h2>

          <p className="intro-description">
            If you are looking to build a successful career in the digital industry, 
            <strong> Webmok Pvt Ltd </strong> offers one of the 
            <strong> best digital marketing courses in Rohtak</strong>. 
            With over <strong>10+ years of experience</strong> in both training and digital services, 
            we have helped thousands of students and businesses grow in the online world. 
            Our institute has <strong>6 branches across North India</strong> including 
            <strong> Rohtak, Delhi, Gurgaon, Noida, Hissar, and Dehradun</strong>. 
            Along with Digital Marketing, we also provide professional training in 
            <strong> Video Editing, Graphic Designing, Web Development,</strong> and 
            <strong> Business Development</strong>. Our programs focus on practical learning, 
            real industry projects, and career guidance, ensuring students gain the skills 
            companies actually need. After successful course completion, we also provide 
            <strong> 100% job assistance</strong> to help you confidently start your professional journey.
          </p>

        </div>

      </section>

      {/* CTA BTNS  */}
      <div className="cta-buttons">

        <a href="tel:+918684031003" className="cta-btn call-btn">
          <FiPhoneCall /> Call Now
        </a>

        <button
          className="cta-btn download-btn"
          onClick={() => setShowPopup(true)}
        >
          <FaDownload /> Download Brochure
        </button>

      </div>


      <div className="footer-div bottom">
        <Bottom />
      </div>


      {SelectedModule && <SelectedModule />}

      {/* CTA BTNS  */}
      <div className="cta-buttons">

        <a href="tel:+918684031003" className="cta-btn call-btn">
          <FiPhoneCall /> Call Now
        </a>

        <button
          className="cta-btn download-btn"
          onClick={() => setShowPopup(true)}
        >
          <FaDownload /> Download Brochure
        </button>

      </div>


      <section className="course-blog-section">
        <div className="course-blog-container">
          <div 
            className="course-blog-content"
            dangerouslySetInnerHTML={{ 
              __html: page.content.replace(/&nbsp;/g, " ") 
            }}
          />
        </div>
      </section>


      <div className="bottom footer-div">
          <Placement/>
      </div>


      <div className="simple">
        <Video/> 
      </div>
      

        <div className="footer-div">
          <Footer />
        </div>

        {showPopup && (
          <DownloadBrochure onClose={() => setShowPopup(false)} />
        )}

    </div>

  );

};

export default LocationDetail;