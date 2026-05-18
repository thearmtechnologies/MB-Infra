import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CareerPage from "../pages/CareerPage";
import Navbar from "../components/layout/Navbar";
import ContactPage from "../pages/ContactPage.jsx";
import LeadershipPage from "../pages/LeadershipPage.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/leadership' element={<LeadershipPage />} />
      </Routes>
    </BrowserRouter>
  );
}
