import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CareerPage from "../pages/CareerPage";
import Navbar from "../components/layout/Navbar";
import ContactPage from "../pages/ContactPage.jsx";
import LeadershipPage from "../pages/about/LeadershipPage.jsx";
import CompanyProfile from "../pages/about/CompanyProfile.jsx";
import Footer from "../components/layout/Footer.jsx";
import HighwaysandRoads from "../pages/projects/HighwaysandRoads.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* About */}
        <Route path="/about/company-profile" element={<CompanyProfile />} />
        <Route path="//about/leadership" element={<LeadershipPage />} />

        {/* Projects */}
        <Route path="/projects/highways-roads" element={<HighwaysandRoads />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
