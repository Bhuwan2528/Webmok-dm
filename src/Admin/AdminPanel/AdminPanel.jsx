import React, { useState, useEffect } from "react";
import "./AdminPanel.css";

import {
  FaHome,
  FaVideo,
  FaChalkboardTeacher,
  FaLayerGroup,
  FaMapMarkedAlt,
  FaSignOutAlt
} from "react-icons/fa";

import logo from "../../assets/logo.png";

import HeroAboutVideo from "../AdminForm/HeroAboutVideo";
import CoursesTrainner from "../AdminForm/CoursesTrainner";
import ChooseFooter from "../AdminForm/ChooseFooter";
import LocationTable from "../LocationTable/LocationTable";

import { useNavigate } from "react-router-dom";

const AdminPanel = () => {

  const [activePage,setActivePage] = useState("dashboard");

  const navigate = useNavigate();


  useEffect(()=>{

    const token = localStorage.getItem("token");

    if(!token){
      window.location.href="/login";
    }

  },[]);


  const logout = async()=>{

    try{

      await fetch("http://localhost:5000/api/auth/logout");

      localStorage.removeItem("token");

      window.location.href="/login";

    }catch(err){
      console.log(err);
    }

  };


  /* ---------- COMPONENT SWITCH ---------- */

  const renderComponent = ()=>{

    switch(activePage){

      case "HeroAboutVideo":
        return <HeroAboutVideo/>;

      case "CoursesTrainner":
        return <CoursesTrainner/>;

      case "ChooseFooter":
        return <ChooseFooter/>;

      case "LocationPages":
        return <LocationTable/>;

      default:
        return(
          <div className="ap-welcome">
            <h1>Welcome Admin 👋</h1>
            <p>Select a section from the sidebar.</p>
          </div>
        );

    }

  };


  return (

    <div className="ap-wrapper">

      {/* SIDEBAR */}

      <div className="ap-sidebar">

        <div className="ap-sidebar-top">

          <img src={logo} alt="" />

          <h2>Admin Panel</h2>

        </div>


        <div className="ap-menu">



          <div
          className={`ap-menu-item ${activePage==="HeroAboutVideo"?"active":""}`}
          onClick={()=>setActivePage("HeroAboutVideo")}
          >
            <FaVideo/>
            Hero, About & Video
          </div>


          <div
          className={`ap-menu-item ${activePage==="CoursesTrainner"?"active":""}`}
          onClick={()=>setActivePage("CoursesTrainner")}
          >
            <FaChalkboardTeacher/>
            Courses & Trainers
          </div>


          <div
          className={`ap-menu-item ${activePage==="ChooseFooter"?"active":""}`}
          onClick={()=>setActivePage("ChooseFooter")}
          >
            <FaLayerGroup/>
            Choose & Footer 
          </div>


          <div
          className={`ap-menu-item ${activePage==="LocationPages"?"active":""}`}
          onClick={()=>setActivePage("LocationPages")}
          >
            <FaMapMarkedAlt/>
            Location Pages
          </div>

        </div>

      </div>



      {/* MAIN */}

      <div className="ap-main">


        {/* HEADER */}

        <div className="ap-header">

          <h2>Admin Dashboard</h2>

          <button className="ap-logout-btn" onClick={logout}>
            <FaSignOutAlt/>
            Logout
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