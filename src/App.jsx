import React from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./Admin/Login/Login";
import HeroAboutVideo from "./Admin/AdminForm/HeroAboutVideo";
import CoursesTrainner from "./Admin/AdminForm/CoursesTrainner";
import ChooseFooter from "./Admin/AdminForm/ChooseFooter";
import AdminPanel from "./Admin/AdminPanel/AdminPanel";

const App = () => {

  return (
    <Routes>

      <Route path="/" element={<Header />} />

      <Route path="/login" element={<Login />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/admin-hero-about-video" element={<HeroAboutVideo />} />
      <Route path="/admin-courses-trainner" element={<CoursesTrainner />} />
      <Route path="/admin-choose-footer" element={<ChooseFooter />} />

    </Routes>
  );
};

export default App;