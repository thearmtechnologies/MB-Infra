import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CareerPage from "../pages/CareerPage";
import Navbar from "../components/layout/Navbar";
import ContactPage from "../pages/ContactPage.jsx";
import LeadershipPage from "../pages/about/LeadershipPage.jsx";
import CompanyProfile from "../pages/about/CompanyProfile.jsx";
import Footer from "../components/layout/Footer.jsx";
import CertificationsPage from "../pages/about/CertificationsPage.jsx";
import IndustrialInfra from "../pages/projects/IndustrialInfra.jsx";
import QualityPolicy from "../pages/about/QualityPolicy.jsx";
import RoadsHighways from "../pages/services/RoadsHighways.jsx";
import CompletedProjects from "../pages/projects/CompletedProjects.jsx";
import BridgesFlyovers from "../pages/services/BridgesFlyovers.jsx";
import AllProjects from "../pages/projects/AllProjects.jsx";
import OngoingProjects from "../pages/projects/OnGoingProjects.jsx";
import IndustrialRailways from "../pages/services/IndustrialRailways.jsx";
import ProjectGallery from "../pages/projects/ProjectsGallery.jsx";
import EquipementMachinary from "../pages/equipment&rental/EquipementMachinary.jsx";
import VisionMission from "../pages/about/VisionMission.jsx";
import FinancialOverview from "../pages/investors/FinancialOverview.jsx";
import ScrollToTop from "../components/layout/ScrollToTop";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about/company-profile" element={<CompanyProfile />} />
        <Route path="/about/leadership" element={<LeadershipPage />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/certifications" element={<CertificationsPage />} />
        <Route path="/about/quality-policy" element={<QualityPolicy />} />

        {/* Projects */}
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/completed" element={<CompletedProjects />} />
        <Route path="/projects/ongoing" element={<OngoingProjects />} />
        <Route path="/projects/gallery" element={<ProjectGallery />} />
        {/* Services */}
        <Route path="/services/roads-highways" element={<RoadsHighways />} />
        <Route
          path="/services/bridges-flyovers"
          element={<BridgesFlyovers />}
        />
        <Route path="/equipment-machinery" element={<EquipementMachinary />} />
        <Route
          path="/services/industrial-railways"
          element={<IndustrialRailways />}
        />

        {/* Investors */}
        <Route path="/investors/financial-overview" element={<FinancialOverview />} />

        {/* Careers */}
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
