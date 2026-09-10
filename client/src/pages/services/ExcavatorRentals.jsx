import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    Wrench,
    ShieldCheck,
    Clock,
    Users,
    Gauge,
    CheckCircle,
    Building,
    Factory,
    Waves,
    Trees,
    Fuel,
    MapPin,
    TrendingUp,
    Package,
    ChevronLeft,
    ChevronRight,
    X,
    Mountain,
    Hammer,
    Drill
} from "lucide-react";
import { Link } from "react-router-dom";

// Hero image
import ExcavatorHero from "../../assets/img/excavator-rental/gallery-6.jpg";

// Gallery Images - Add your images here
import Gallery1 from "../../assets/img/excavator-rental/gallery-1.jpg";
import Gallery2 from "../../assets/img/excavator-rental/gallery-2.webp";
import Gallery3 from "../../assets/img/excavator-rental/gallery-3.jpg";
import Gallery4 from "../../assets/img/excavator-rental/gallery-4.webp";
import Gallery5 from "../../assets/img/excavator-rental/gallery-5.jpg";
import Gallery6 from "../../assets/img/excavator-rental/gallery-6.jpg";
import Gallery7 from "../../assets/img/excavator-rental/gallery-7.png";
import Gallery8 from "../../assets/img/excavator-rental/gallery-8.webp";

// Service Highlights
const serviceHighlights = [
    { icon: Clock, title: "24/7 Availability", description: "Round-the-clock excavator rental services to keep your digging and earthmoving projects moving without delays." },
    { icon: Users, title: "Experienced Operators", description: "Skilled and certified operators ensuring safe, precise, and efficient excavation operations." },
    { icon: ShieldCheck, title: "Safety Certified", description: "All machines regularly inspected and maintained to meet the highest safety and performance standards." },
    { icon: Wrench, title: "On-Site Maintenance", description: "Dedicated mechanical support team ensuring zero downtime and maximum machine availability." }
];

// Industries Served
const industries = [
    { icon: Building, name: "Construction", description: "Foundation digging, trenching, and demolition support for high-rise and commercial projects." },
    { icon: Factory, name: "Mining & Quarries", description: "Heavy-duty digging, ore extraction, and overburden removal for mining operations." },
    { icon: Waves, name: "Infrastructure", description: "Roads, dams, canals, and large-scale civil engineering projects requiring massive earthmoving." },
    { icon: Trees, name: "Renewable Energy", description: "Trenching for solar farms, foundation preparation for wind turbines, and green energy infrastructure." }
];

// Key Benefits
const benefits = [
    { icon: Fuel, title: "Fuel Efficient Fleet", description: "Modern, emission-compliant excavators reducing operational costs and environmental impact." },
    { icon: MapPin, title: "Pan-India Coverage", description: "Reliable rental services available across all major cities and remote project sites." },
    { icon: TrendingUp, title: "High Productivity", description: "Maximum bucket capacity and digging depth ensuring faster project completion." },
    { icon: Package, title: "Flexible Rentals", description: "Short-term and long-term rental options tailored to your specific project requirements." }
];

// Features
const features = [
    "Mini excavators for tight spaces",
    "Standard crawler excavators for general digging",
    "Heavy-duty excavators for mining & quarrying",
    "Long-reach excavators for deep digging",
    "Wheeled excavators for road construction",
    "Hydraulic breakers & rock hammers",
    "Grapples and specialized attachments",
    "Off-road excavators for challenging terrains"
];

// Gallery Images Data with accurate project titles matching actual image contents
const galleryImages = [
    { 
        id: 1, 
        src: Gallery1, 
        alt: "CAT 350 Heavy Crawler Excavator Rock Cutting", 
        title: "CAT 350 Quarry & Rock Excavation",
        category: "Mining & Heavy Quarrying",
        description: "Heavy crawler excavator deployed for rock breaking and overburden removal."
    },
    { 
        id: 2, 
        src: Gallery2, 
        alt: "Tracked Excavator Site Grading and Earthmoving", 
        title: "Site Grading & Soil Excavation",
        category: "Land Development & Earthworks",
        description: "Precision soil excavation, leveling, and foundation trench preparation."
    },
    { 
        id: 3, 
        src: Gallery3, 
        alt: "Hyundai HX380L Excavator Handling Massive Stone Boulder", 
        title: "Hyundai HX380L Stone Block Handling",
        category: "Granite & Boulder Operations",
        description: "Heavy excavator lifting and maneuvering massive stone blocks in a quarry."
    },
    { 
        id: 4, 
        src: Gallery4, 
        alt: "Heavy Excavator High Embankment and Slope Earthmoving", 
        title: "High-Slope Embankment Cutting",
        category: "Highway & Slope Works",
        description: "Heavy crawler excavator shaping elevated highway embankments."
    },
    { 
        id: 5, 
        src: Gallery5, 
        alt: "Hitachi Excavator Deep Pit Shoring and Foundation Digging", 
        title: "Deep Foundation & Shoring Excavation",
        category: "Urban Civil & Deep Pits",
        description: "Specialized excavator executing deep trenching inside structural shoring works."
    },
    { 
        id: 6, 
        src: Gallery6, 
        alt: "Dual Hitachi Zaxis 300LC Excavators Bulk Earthworks", 
        title: "Dual Hitachi Zaxis Mass Earthworks",
        category: "Bulk Earthmoving & Infrastructure",
        description: "Dual heavy excavators executing high-capacity mass earth excavation."
    },
    { 
        id: 7, 
        src: Gallery7, 
        alt: "Heavy Crawler Excavator Bulk Digging in Harsh Terrain", 
        title: "Heavy Terrain Leveling & Bulk Digging",
        category: "Site Preparation & Quarrying",
        description: "High-capacity bucket scooping tough terrain during industrial site preparation."
    },
    { 
        id: 8, 
        src: Gallery8, 
        alt: "All-Terrain Wheeled Excavator at Aggregate Stockpile", 
        title: "Wheeled Excavator Material Handling",
        category: "Aggregate Handling & Roadworks",
        description: "Mobile wheeled excavator loading aggregates and managing stockpiles on site."
    }
];

export default function ExcavatorRentals() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // Handle keyboard events
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxOpen) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative hero-section flex items-center bg-gray-900 overflow-hidden min-h-[85vh] md:min-h-[90vh]">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        style={{ y: heroY, scale: heroScale }}
                        className="w-full h-full"
                    >
                        <img
                            src={ExcavatorHero}
                            alt="Excavator Rentals"
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
                            Excavator
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-5 md:mb-6">
                            <span className="text-[#f25810]">Rental Services</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                            India's most reliable excavator rental service. We provide a comprehensive fleet of heavy-duty digging machines for construction, mining, infrastructure, and industrial projects across the country.
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Our Excavator Fleet</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Comprehensive range of excavators available for short-term and long-term rentals across India, from mini to heavy-duty.
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
                                <p className="text-xs sm:text-sm text-gray-400">Comprehensive Fleet</p>
                                <p className="text-2xl sm:text-3xl font-black">Excavators</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                <span className="text-xs sm:text-sm">All Types Available</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                <span className="text-xs sm:text-sm">Experienced Operators</span>
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
                                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Gallery Section - High Impact Fleet Gallery */}
            <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gray-50 border-t border-gray-200 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                    >
                        <span className="inline-block py-1 px-3 bg-[#f25810]/10 text-[#f25810] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 rounded-full">
                            Project Portfolio & Fleet
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Our Fleet in Action</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Explore our excavators on active civil, mining, and highway projects across India. Click on any image to view in high resolution.
                        </p>
                    </motion.div>

                    {/* Uniform Responsive Grid - Zero Empty Spaces */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06 }}
                                onClick={() => openLightbox(index)}
                                className="group relative h-72 w-full overflow-hidden rounded-xl bg-gray-900 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Persistent Tag Badge */}
                                <div className="absolute top-3 left-3 z-10">
                                    <span className="inline-block bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded border border-white/20 shadow-sm group-hover:bg-[#f25810] group-hover:border-[#f25810] transition-colors">
                                        {image.category}
                                    </span>
                                </div>

                                {/* Hover Details Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white text-base sm:text-lg font-bold leading-snug mb-1">
                                            {image.title}
                                        </h3>
                                        <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 mb-3">
                                            {image.description}
                                        </p>
                                        <div className="inline-flex items-center gap-1.5 text-[#f25810] text-xs font-bold uppercase tracking-wider">
                                            <span>View Project</span>
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <button
                            onClick={() => openLightbox(0)}
                            className="inline-flex items-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-3.5 font-bold transition-all shadow-lg shadow-orange-500/20 group rounded-lg"
                        >
                            View All Images ({galleryImages.length})
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Why Choose MB Infraprojects?</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Beyond machines, we provide complete earthmoving solutions with unmatched reliability and safety.
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
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Industries We Serve</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Our excavator rental solutions are trusted across diverse sectors for critical earthmoving and digging operations.
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
                                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{industry.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{industry.description}</p>
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Benefits of Renting with Us</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Experience hassle-free earthmoving with our premium excavator rental services.
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
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-1 sm:mb-2">{benefit.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">{benefit.description}</p>
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
                                <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-[#f25810]" />
                                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f25810]">Fleet Ready</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
                                Need an Excavator for Your Project?
                            </h2>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                                Get a customized rental plan tailored to your project requirements and budget. Our fleet is ready to deploy across India.
                            </p>
                            <ul className="space-y-2 sm:space-y-3 text-gray-300">
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                                    <span className="text-sm sm:text-base">Comprehensive fleet of excavators</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                                    <span className="text-sm sm:text-base">Short-term and long-term rental plans</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                                    <span className="text-sm sm:text-base">Experienced operators and on-site support</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 w-full bg-gray-800 p-6 sm:p-8 border border-gray-700 rounded-lg"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Get a Free Quote Today</h3>
                            <p className="text-sm text-gray-400 mb-4 sm:mb-6">
                                Contact our experts to discuss your specific requirements and get a tailored rental solution.
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
                            Explore our project portfolio to see how our excavator rental solutions have powered some of India's most challenging infrastructure projects.
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
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all z-20"
                        title="Close (Esc)"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 sm:left-6 text-white hover:text-white transition-all z-20 bg-black/60 hover:bg-[#f25810] p-3 rounded-full border border-white/10 shadow-lg"
                        title="Previous Image (Left Arrow)"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 sm:right-6 text-white hover:text-white transition-all z-20 bg-black/60 hover:bg-[#f25810] p-3 rounded-full border border-white/10 shadow-lg"
                        title="Next Image (Right Arrow)"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div 
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-black max-h-[75vh]">
                            <img
                                src={galleryImages[currentImageIndex].src}
                                alt={galleryImages[currentImageIndex].alt}
                                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                            />
                        </div>
                        
                        {/* Info Bar */}
                        <div className="w-full mt-4 bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
                            <div>
                                <span className="inline-block bg-[#f25810] text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1.5">
                                    {galleryImages[currentImageIndex].category}
                                </span>
                                <h3 className="text-white text-base sm:text-lg font-bold">
                                    {galleryImages[currentImageIndex].title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                                    {galleryImages[currentImageIndex].description}
                                </p>
                            </div>
                            <div className="shrink-0 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-gray-300 font-semibold self-end sm:self-center">
                                {currentImageIndex + 1} / {galleryImages.length}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}