import React from "react";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectSection";
import ServicesSection from "../components/home/ServicesSection";
import GallerySection from "../components/home/GallerySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <GallerySection />
    </main>
  );
}
