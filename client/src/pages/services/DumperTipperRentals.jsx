import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Wrench,
  ShieldCheck,
  Clock,
  Users,
  Gauge,
  AlertCircle,
  CheckCircle,
  Building,
  Factory,
  Waves,
  Trees,
  Fuel,
  MapPin,
  TrendingUp,
  Package,
  Construction,
  Route,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

// Hero image
import DumperHero from "../../assets/img/dumper-rental/gallery-6.jpg";

// Gallery Images - Add your images here
import Gallery1 from "../../assets/img/dumper-rental/gallery-1.webp";
import Gallery2 from "../../assets/img/dumper-rental/gallery-2.jpg";
import Gallery3 from "../../assets/img/dumper-rental/gallery-3.webp";
import Gallery4 from "../../assets/img/dumper-rental/gallery-4.jpg";
import Gallery5 from "../../assets/img/dumper-rental/gallery-5.jpg";
import Gallery6 from "../../assets/img/dumper-rental/gallery-6.jpg";
import Gallery7 from "../../assets/img/dumper-rental/gallery-7.webp";
import Gallery8 from "../../assets/img/dumper-rental/gallery-8.jpg";

// Service Highlights
const serviceHighlights = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock dumper and tipper rental services to keep your project moving without delays.",
  },
  {
    icon: Users,
    title: "Experienced Operators",
    description:
      "Skilled and certified drivers ensuring safe, efficient, and reliable material transport operations.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Certified",
    description:
      "All vehicles regularly inspected and maintained to meet the highest safety and performance standards.",
  },
  {
    icon: Wrench,
    title: "On-Site Maintenance",
    description:
      "Dedicated mechanical support team ensuring zero downtime and maximum fleet availability.",
  },
];

// Industries Served
const industries = [
  {
    icon: Building,
    name: "Construction",
    description:
      "High-rise buildings, commercial complexes, and residential projects requiring bulk material transport.",
  },
  {
    icon: Factory,
    name: "Mining & Quarries",
    description:
      "Heavy-duty hauling for mining operations, quarry extraction, and aggregate processing.",
  },
  {
    icon: Waves,
    name: "Infrastructure",
    description:
      "Roads, bridges, dams, and large-scale civil engineering projects with massive earthmoving needs.",
  },
  {
    icon: Trees,
    name: "Renewable Energy",
    description:
      "Material transport for solar farms, wind turbine installations, and green energy infrastructure.",
  },
];

// Key Benefits
const benefits = [
  {
    icon: Fuel,
    title: "Fuel Efficient Fleet",
    description:
      "Modern, fuel-efficient vehicles reducing operational costs and environmental impact.",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description:
      "Reliable rental services available across all major cities and project sites.",
  },
  {
    icon: TrendingUp,
    title: "High Productivity",
    description:
      "Maximum payload capacity ensuring fewer trips and faster project completion.",
  },
  {
    icon: Package,
    title: "Flexible Rentals",
    description:
      "Short-term and long-term rental options tailored to your project requirements.",
  },
];

// Features
const features = [
  "Heavy-duty dumpers for mining & quarrying",
  "Tippers for construction material transport",
  "Hydraulic dumpers for site clearance",
  "Articulated haulers for rough terrain",
  "Rear dump trucks for bulk material handling",
  "Bottom dump trucks for controlled discharge",
  "Side dump trucks for narrow spaces",
  "Off-road dumpers for challenging conditions",
];

// Gallery Images Data
const galleryImages = [
  {
    id: 1,
    src: Gallery1,
    alt: "Dumper in action at construction site",
    title: "Construction Site Operations",
  },
  {
    id: 2,
    src: Gallery2,
    alt: "Tipper truck transporting materials",
    title: "Material Transport",
  },
  {
    id: 3,
    src: Gallery3,
    alt: "Heavy-duty dumper at mining site",
    title: "Mining Operations",
  },
  {
    id: 4,
    src: Gallery4,
    alt: "Fleet of tippers at work",
    title: "Fleet in Action",
  },
  {
    id: 5,
    src: Gallery5,
    alt: "Dumper unloading at site",
    title: "Unloading Operations",
  },
  {
    id: 6,
    src: Gallery6,
    alt: "Tipper on highway transport",
    title: "Highway Transport",
  },
  {
    id: 7,
    src: Gallery7,
    alt: "Off-road dumper in challenging terrain",
    title: "Off-Road Operations",
  },
  {
    id: 8,
    src: Gallery8,
    alt: "Dumper fleet at project site",
    title: "Project Site Fleet",
  },
];

export default function DumperTipperRentals() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  // Handle keyboard events
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section
        ref={heroRef}
        className="relative hero-section flex items-center bg-gray-900 overflow-hidden min-h-[85vh] md:min-h-[90vh]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: heroY, scale: heroScale }}
            className="w-full h-full"
          >
            <img
              src={DumperHero}
              alt="Dumper & Tipper Rentals"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl lg:max-w-3xl"
          >
            <span className="inline-block py-1 px-3 sm:px-4 bg-[#f25810] text-white text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-md">
              Heavy Equipment Rentals
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
              Dumper & Tipper
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-5 md:mb-6">
              <span className="text-[#f25810]">Rental Services</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              India's most reliable dumper and tipper rental service. We provide
              a comprehensive fleet of heavy-duty transport vehicles for
              construction, mining, infrastructure, and industrial projects
              across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-500/20 group rounded-lg"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/fleet"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base border border-white/30 transition-all rounded-lg"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Fleet Overview */}
      <div id="fleet" className="py-12 sm:py-16 md:py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
              Our Dumper & Tipper Fleet
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Comprehensive range of dumpers and tippers available for
              short-term and long-term rentals across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white p-4 sm:p-6 md:p-10 mb-12 sm:mb-16 flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <Gauge className="w-8 h-8 sm:w-10 sm:h-10 text-[#f25810]" />
              <div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Comprehensive Fleet
                </p>
                <p className="text-2xl sm:text-3xl font-black">
                  Dumpers & Tippers
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-xs sm:text-sm">All Types Available</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-xs sm:text-sm">
                  Experienced Operators
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-xs sm:text-sm">Pan-India Service</span>
              </div>
            </div>
          </motion.div>

          {/* Fleet Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle className="w-5 h-5 text-[#f25810] shrink-0" />
                <span className="text-sm sm:text-base text-gray-700">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Gallery Section - NEW */}
      <section
        id="gallery"
        className="py-12 sm:py-16 md:py-20 bg-gray-50 border-t border-gray-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
              Our Fleet in Action
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Browse through our extensive gallery showcasing our dumpers and
              tippers at work across various project sites in India.
            </p>
          </motion.div>

          {/* Gallery Masonry/Collage Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance] space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-200 break-inside-avoid"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-white text-xs sm:text-sm font-semibold">
                      {image.title}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => openLightbox(0)}
              className="inline-flex items-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-3 font-bold transition-all shadow-lg shadow-orange-500/20 group rounded-lg"
            >
              View All Images
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us - Service Highlights */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
              Why Choose MB Infraprojects?
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Beyond vehicles, we provide complete material transport solutions
              with unmatched reliability and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {serviceHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-4 sm:p-6 bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 text-white mx-auto flex items-center justify-center mb-3 sm:mb-4 rounded-lg group-hover:bg-[#f25810] transition-colors">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Our dumper and tipper rental solutions are trusted across diverse
              sectors for critical material transport operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 sm:p-6 border-2 border-gray-200 bg-white hover:border-[#f25810] hover:shadow-xl transition-all duration-300 rounded-lg group"
              >
                <industry.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#f25810] mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {industry.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Key Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
              Benefits of Renting with Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Experience hassle-free material transport with our premium dumper
              and tipper rental services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 sm:p-6 bg-gray-50 border border-gray-200 hover:border-[#f25810] hover:shadow-xl transition-all duration-300 rounded-lg group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 text-white mx-auto flex items-center justify-center mb-3 sm:mb-4 rounded-lg group-hover:bg-[#f25810] transition-colors">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-1 sm:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#f25810]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f25810]">
                  Fleet Ready
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
                Need a Dumper or Tipper for Your Project?
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Get a customized rental plan tailored to your project
                requirements and budget. Our fleet is ready to deploy across
                India.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                  <span className="text-sm sm:text-base">
                    Comprehensive fleet of dumpers & tippers
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                  <span className="text-sm sm:text-base">
                    Short-term and long-term rental plans
                  </span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                  <span className="text-sm sm:text-base">
                    Experienced operators and on-site support
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full bg-gray-800 p-6 sm:p-8 border border-gray-700 rounded-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Get a Free Quote Today
              </h3>
              <p className="text-sm text-gray-400 mb-4 sm:mb-6">
                Contact our experts to discuss your specific requirements and
                get a tailored rental solution.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all group w-full rounded-lg"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Footer CTA */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">
              See Our Fleet in Action
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Explore our project portfolio to see how our dumper and tipper
              rental solutions have powered some of India's most challenging
              infrastructure projects.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 sm:gap-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all group rounded-lg"
            >
              View Project Portfolio
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-center text-sm sm:text-base font-medium">
                {galleryImages[currentImageIndex].title}
              </p>
              <p className="text-gray-300 text-center text-xs sm:text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
