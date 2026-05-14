import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>

      <Footer />
    </>
  );
}