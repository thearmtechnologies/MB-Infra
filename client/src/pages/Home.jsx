import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
    

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
