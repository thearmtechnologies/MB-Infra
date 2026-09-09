import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
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
    ChevronRight,
    Layers,
    Cpu,
    Filter,
    Droplets,
    Play
} from "lucide-react";
import { Link } from "react-router-dom";

// Hero image
import CrusherHero from "../../assets/img/crusher-plant/hero.jpeg";

// Stage Images
import JawCrusher from "../../assets/img/crusher-plant/jaw-crusher.webp";
import ConeCrusher from "../../assets/img/crusher-plant/cone-crusher.png";
import VSICrusher from "../../assets/img/crusher-plant/vsi-crusher.jpeg";
import Sander from "../../assets/img/crusher-plant/sander.png";

// Final Product Images
import Aggregate20mm from "../../assets/img/crusher-plant/20mm-aggregate.webp";
import Aggregate40mm from "../../assets/img/crusher-plant/40mm-aggregate.webp";
import Kapchi10mm from "../../assets/img/crusher-plant/10mm-kapchi.webp";
import Grit5mm from "../../assets/img/crusher-plant/5mm-grit.webp";
import Dust from "../../assets/img/crusher-plant/dust.jpg";

// Plant Section Data
const plantSections = [
    {
        id: "stage-1",
        title: "Stage 1: Primary Crushing",
        subtitle: "Jaw Crusher",
        icon: <Layers className="w-8 h-8" />,
        image: JawCrusher,
        description: "The process begins with the Puzzolana PJC 11076 jaw crusher, capable of handling feed material up to 650mm. It uses a unique elliptical motion for a high reduction ratio and efficient primary crushing. This stage reduces large boulders into a manageable size for the next phase.",
        specs: [
            "Feed Opening: 1100 x 760 mm",
            "Max Feed Size: Up to 650 mm",
            "High crushing ratio with elliptical motion",
            "Designed for heavy-duty, continuous operation"
        ]
    },
    {
        id: "stage-2",
        title: "Stage 2: Secondary Crushing",
        subtitle: "Cone Crusher",
        icon: <Cpu className="w-8 h-8" />,
        image: ConeCrusher,
        description: "The secondary stage uses a high-performance Puzzolana cone crusher, like the PCC 26100, designed for superior crushing action and longevity. It further reduces the material size, producing a consistent output for the tertiary stage.",
        specs: [
            "New improved metallurgy for hard rock",
            "Bigger feed opening for higher optimization",
            "Improved lubrication for easier maintenance",
            "Produces (-)40mm material"
        ]
    },
    {
        id: "stage-3",
        title: "Stage 3: Tertiary Crushing",
        subtitle: "VSI Crusher",
        icon: <Filter className="w-8 h-8" />,
        image: VSICrusher,
        description: "This stage employs a Vertical Shaft Impactor (VSI) to shape the aggregates. It operates on a rock-on-rock or rock-on-metal principle to produce well-shaped, cubical aggregates crucial for high-quality concrete and asphalt.",
        specs: [
            "Produces cubically shaped aggregates",
            "Available in Rock on Rock & Rock on Metal configurations",
            "Processes 0-40mm feed material",
            "Enhances the quality of final products"
        ]
    },
    {
        id: "stage-4",
        title: "Stage 4: Quaternary Crushing (Sander)",
        subtitle: "Sander / Plaster Sand Plant",
        icon: <Droplets className="w-8 h-8" />,
        image: Sander,
        description: "The final stage uses Puzzolana's innovative 'Sander' to produce manufactured sand (M-Sand) and plaster sand. It operates on a floating shaft principle, providing a high reduction ratio and high productivity at a low cost. This stage is crucial for producing fine aggregates.",
        specs: [
            "Specifically engineered for M-Sand & Plaster Sand",
            "Floating shaft principle for high efficiency",
            "Fines within IS 383 Zone II limits",
            "Can be installed as a standalone unit"
        ]
    }
];

// Final Product Data
const finalProducts = [
    { name: "40 mm Aggregate", image: Aggregate40mm, description: "Coarse aggregate for heavy construction, RCC works, and large-scale concrete structures." },
    { name: "20 mm Aggregate", image: Aggregate20mm, description: "Standard coarse aggregate used in general concrete construction, road works, and building foundations." },
    { name: "10 mm Kapchi", image: Kapchi10mm, description: "Fine aggregate used for thinner concrete layers, pavements, and as a base material for tiles and flooring." },
    { name: "5 mm Grit", image: Grit5mm, description: "Fine material used in the production of concrete blocks, paving stones, and as a filler material." },
    { name: "Dust", image: Dust, description: "Ultra-fine material, often used in construction fill, or further processed for specific applications." }
];

export default function CrusherPlant() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // YouTube video ID - extracted from the new link
    const videoId = "Byj_3lBylu4";

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section - IMPROVED RESPONSIVE TEXT */}
            <section ref={heroRef} className="relative hero-section flex items-center bg-gray-900 overflow-hidden min-h-[85vh] md:min-h-[90vh]">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        style={{ y: heroY, scale: heroScale }}
                        className="w-full h-full"
                    >
                        <img
                            src={CrusherHero}
                            alt="Puzzolana Crusher Plant"
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
                        {/* Badge - Smaller on mobile */}
                        <span className="inline-block py-1 px-3 sm:px-4 bg-[#f25810] text-white text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-md">
                            Fixed Crusher Plant
                        </span>

                        {/* Main Title - Responsive sizes */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight ">
                            Puzzolana 250 TPH
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-5 md:mb-6">
                            <span className="text-[#f25810]">4-Stage Crusher Plant</span>
                        </h2>

                        {/* Description - Responsive */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
                            This plant can produce up to 5 different aggregate sizes, including 40mm, 20mm, 10mm Kapchi, 5mm Grit, and Dust, meeting the stringent requirements of modern infrastructure projects.
                        </p>

                        {/* Buttons - Responsive */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-500/20 group rounded-lg"
                            >
                                Get a Quote
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="#stages"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base border border-white/30 transition-all rounded-lg"
                            >
                                Explore the Process
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* NEW: Video Section - Machine in Action */}
            <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Play className="w-8 h-8 text-[#f25810] fill-[#f25810]" />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
                                Machine in Action
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600">
                            Watch the Puzzolana 250 TPH 4-Stage Crusher Plant in operation. See how it efficiently processes materials and produces high-quality aggregates.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-gray-900"
                    >
                        {/* Video Container with 16:9 Aspect Ratio */}
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`}
                                title="Modular Puzzolana 250 TPH Aggregate Stone Crusher Full Plant Running Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Video Overlay Label */}
                        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            Live Demo: Puzzolana 250 TPH 4-Stage Crusher Plant
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Plant Overview - Capacity Banner */}
            <div className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Engineered for Excellence</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            The Puzzolana 250 TPH 4-Stage plant is a testament to advanced engineering. It combines robust construction with innovative design to deliver superior performance, low operational costs, and high-quality aggregates for any project.
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
                                <p className="text-xs sm:text-sm text-gray-400">Processing Capacity</p>
                                <p className="text-2xl sm:text-3xl font-black">250 TPH</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                <span className="text-xs sm:text-sm">4-Stage Crushing</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                <span className="text-xs sm:text-sm">5 Aggregate Sizes</span>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                <span className="text-xs sm:text-sm">Producing M-Sand</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3. 4-Stage Process Explanation */}
            <div id="stages" className="py-12 sm:py-16 md:py-20 bg-gray-50 border-t border-gray-200 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">The 4-Stage Crushing Process</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Each stage in this meticulously designed plant plays a critical role in transforming raw boulders into high-quality, finished aggregates.
                        </p>
                    </motion.div>

                    <div className="space-y-8 sm:space-y-12">
                        {plantSections.map((stage, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100`}
                            >
                                <div className="lg:w-80 xl:w-96 flex-shrink-0">
                                    <div className="bg-gray-100 rounded-lg overflow-hidden h-48 sm:h-56 md:h-60 flex items-center justify-center">
                                        <img
                                            src={stage.image}
                                            alt={stage.title}
                                            className="w-full h-full object-contain p-3 sm:p-4"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                        <div className="p-1.5 sm:p-2 bg-[#f25810]/10 text-[#f25810] rounded-lg">
                                            {stage.icon}
                                        </div>
                                        <span className="text-xs sm:text-sm font-bold text-[#f25810] uppercase tracking-wider">Stage {idx+1}</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900">{stage.title}</h3>
                                    <p className="text-sm sm:text-md font-semibold text-gray-600 mb-2 sm:mb-3">{stage.subtitle}</p>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">{stage.description}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                                        {stage.specs.map((spec, si) => (
                                            <li key={si} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
                                                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f25810] shrink-0" />
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. Final Products Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Premium Quality Aggregates</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            The plant is engineered to produce a wide range of high-quality aggregates from 40mm down to 5mm grit and dust, perfectly suited for a variety of construction applications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                        {finalProducts.map((product, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="h-32 sm:h-36 md:h-40 bg-gray-100 flex items-center justify-center ">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-3 sm:p-4 text-center">
                                    <h4 className="font-bold text-sm sm:text-base text-gray-900">{product.name}</h4>
                                    <p className="text-xs text-gray-500 mt-1 hidden sm:block">{product.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why Choose This Plant */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">Why Choose This Crusher Plant?</h2>
                        <p className="text-sm sm:text-base text-gray-600">
                            Investing in a Puzzolana plant means investing in reliability, efficiency, and superior product quality, backed by decades of industry expertise.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { icon: Clock, title: "High Productivity", description: "Continuous, high-capacity operation ensures your project stays on schedule." },
                            { icon: ShieldCheck, title: "Superior Aggregate Quality", description: "Produces well-shaped, cubical aggregates meeting the highest standards for concrete and asphalt." },
                            { icon: Wrench, title: "Low Maintenance", description: "Engineered for durability with easy access for maintenance, minimizing downtime." },
                            { icon: Users, title: "Expert Support", description: "Backed by Puzzolana's extensive service network and skilled support teams across India." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-4 sm:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg group"
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

            {/* 6. Call to Action */}
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
                                <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#f25810]" />
                                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#f25810]">Project Ready</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
                                Boost Your Aggregate Production
                            </h2>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                                The Puzzolana 250 TPH 4-Stage plant is a complete, turnkey solution for your aggregate needs. From initial crushing to final screening and sand production, it offers unmatched efficiency.
                            </p>
                            <ul className="space-y-2 sm:space-y-3 text-gray-300">
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                                    <span className="text-sm sm:text-base">250 TPH capacity for large-scale projects</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                                    <span className="text-sm sm:text-base">Produces high-quality M-Sand and aggregates</span>
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0" />
                                    <span className="text-sm sm:text-base">Engineered for low cost per ton production</span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 w-full bg-gray-800 p-6 sm:p-8 border border-gray-700 rounded-lg"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Plan Your Crusher Plant Project</h3>
                            <p className="text-sm text-gray-400 mb-4 sm:mb-6">
                                Contact our experts to discuss your specific requirements and get a tailored solution for your project.
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

            {/* 7. Footer CTA */}
            {/* 7. Footer CTA */}
<section className="py-12 sm:py-16 bg-white border-t border-gray-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="inline-block px-3 py-1 mb-3 sm:mb-4 bg-[#f25810]/10 text-[#f25810] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full">
                Puzzolana 250 TPH 4-Stage Crusher Plant
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-3 sm:mb-4">
                Ready to Work With Us?
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Get in touch with our team to discuss your project requirements,
                plant configuration, aggregate specifications, and complete
                turnkey crushing solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#f25810] hover:bg-[#d44a0d] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all shadow-lg shadow-orange-500/20 group rounded-lg"
                >
                    Request a Quote
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base transition-all group rounded-lg"
                >
                    Explore More Products
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    </div>
</section>
        </div>
    );
}