import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./Admin/Login/Login";
import HeroAboutVideo from "./Admin/AdminForm/HeroAboutVideo";
import CoursesTrainner from "./Admin/AdminForm/CoursesTrainner";
import ChooseFooter from "./Admin/AdminForm/ChooseFooter";
import AdminPanel from "./Admin/AdminPanel/AdminPanel";
import Location from "./Pages/Location/Location";
import Testimonials from "./Pages/Testimonails/Testimonials";
import LocationForm from "./Admin/AdminForm/LocationForm";
import LocationDetail from "./Pages/LocationDetail/LocationDetail";
import LocationTable from "./Admin/LocationTable/LocationTable";

const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>

      <Route path="/" element={<Header />} />
      <Route path="/locations" element={<Location />} />
      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="/login" element={<Login />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      
      <Route path="/admin-hero-about-video" element={<HeroAboutVideo />} />
      <Route path="/admin-courses-trainner" element={<CoursesTrainner />} />
      <Route path="/admin-choose-footer" element={<ChooseFooter />} />
      <Route path="/admin/location/new" element={<LocationForm />} />
      <Route path="/admin/location/edit/:id" element={<LocationForm />} />
      <Route path="/admin/location-table" element={<LocationTable />} />
      <Route path="/location-detail" element={<LocationDetail />} />
      
      <Route path="/:slug" element={<LocationDetail />} />

    </Routes>
  );
};

export default App;