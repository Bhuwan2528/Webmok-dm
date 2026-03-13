import React, { useState, useEffect } from "react";
import "./AdminPanel.css";
import { FaRegCircle, FaSignOutAlt } from "react-icons/fa";
import logo from '../../assets/logo.png'
import HeroAboutVideo from "../AdminForm/HeroAboutVideo";
import CoursesTrainner from "../AdminForm/CoursesTrainner";
import ChooseFooter from "../AdminForm/ChooseFooter";

const AdminPanel = () => {

  const [activePage, setActivePage] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }

  }, []);

  const logout = async () => {

    try {

      await fetch("https://webmok-dm-backend.onrender.com/api/auth/logout");

      localStorage.removeItem("token");

      window.location.href = "/login";

    } catch (err) {
      console.log(err);
    }

  };


/* ---------- RENDER LOGIC ---------- */


  const renderComponent = () => {

    switch (activePage) {

      case "HeroAboutVideo":
        return <HeroAboutVideo />;

      case "CoursesTrainner":
        return <CoursesTrainner />;

      case "ChooseFooter":
        return <ChooseFooter />;

      default:
        return (
          <div className="ap-welcome">
            <h1>Welcome Admin</h1>
            <p>Select a section from sidebar.</p>
          </div>
        );
    }

  };



  return (

    <div className="ap-wrapper">

      {/* SIDEBAR */}

      <div className="ap-sidebar">

        <h2 className="ap-logo">Admin</h2>

        <div className="ap-menu">

          <div
            className={`ap-menu-item ${activePage==="HeroAboutVideo"?"active":""}`}
            onClick={()=>setActivePage("HeroAboutVideo")}
          >
            <FaRegCircle/>
            HeroAboutVideo
          </div>

          <div
            className={`ap-menu-item ${activePage==="CoursesTrainner"?"active":""}`}
            onClick={()=>setActivePage("CoursesTrainner")}
          >
            <FaRegCircle/>
            CoursesTrainner
          </div>

          <div
            className={`ap-menu-item ${activePage==="ChooseFooter"?"active":""}`}
            onClick={()=>setActivePage("ChooseFooter")}
          >
            <FaRegCircle/>
            ChooseFooter
          </div>

        </div>

      </div>



      {/* MAIN AREA */}

      <div className="ap-main">

        {/* HEADER */}

        <div className="ap-header">

          <div className="ap-header-logo">
            <img src={logo} alt="" />
          </div>

          <button className="ap-logout-btn" onClick={logout}>
            <FaSignOutAlt/> Logout
          </button>

        </div>



        {/* CONTENT */}

        <div className="ap-content">

          {renderComponent()}

        </div>

      </div>

    </div>

  );

};

export default AdminPanel;