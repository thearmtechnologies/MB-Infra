import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Image as ImageIcon, Film, Grid2X2, Eye } from "lucide-react";

// Existing project media imports
import Image1 from "../../assets/img/project/img1.jpeg";
import Image2 from "../../assets/img/project/img2.png";
import Image3 from "../../assets/img/project/img3.png";
import Image4 from "../../assets/img/project/img4.png";
import Image5 from "../../assets/img/project/img5.png";
import Image6 from "../../assets/img/project/img6.png";
import Image7 from "../../assets/img/project/img7.png";
import ClipVideo from "../../assets/videos/clip_01.mp4";
import ClipVideo2 from "../../assets/videos/clip_02.mp4";
import ClipVideo3 from "../../assets/videos/clip_03.mp4";
import ClipVideo4 from "../../assets/videos/clip_04.mp4";
import ClipVideo5 from "../../assets/videos/clip_05.mp4";
import ClipVideo6 from "../../assets/videos/clip_06.mp4";

// New images & video from new_img folder
import BridgeImg from "../../assets/img/new_img/Bridge.jpeg";
import Bridge1Img from "../../assets/img/new_img/Bridge1.jpeg";
import BridgeColumnImg from "../../assets/img/new_img/BridgeColumn.jpeg";
import BridgeConstImg from "../../assets/img/new_img/BridgeConst.jpeg";
import BridgeMBImg from "../../assets/img/new_img/BridgeMB.jpeg";
import HotMix2Img from "../../assets/img/new_img/HotMix2.jpg";
import HotmixImg from "../../assets/img/new_img/Hotmix.jpg";
import PuzzolanaImg from "../../assets/img/new_img/Puzzolana.jpg";
import StoneCrusherImg from "../../assets/img/new_img/StoneCrusher.jpg";
import TruckConvoyImg from "../../assets/img/new_img/TruckConvoy.png";
import HomeCraneImg from "../../assets/img/new_img/homecrane.jpeg";
import NewVideo1 from "../../assets/img/new_img/Video1.mp4";

// Complete media dataset with names and categories
const galleryMedia = [
  // --- New Additions from new_img ---
  {
    id: 101,
    title: "Structural Bridge Pier Execution",
    category: "Bridges & Flyovers",
    type: "photo",
    image: BridgeImg,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 102,
    title: "Heavy Earthmoving & Highway Excavation In Action",
    category: "Heavy Earthworks",
    type: "video",
    video: NewVideo1,
    poster: TruckConvoyImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 103,
    title: "Long-Span Flyover Foundation & Pier Construction",
    category: "Bridges & Flyovers",
    type: "photo",
    image: Bridge1Img,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 104,
    title: "Reinforced Concrete Column Setup",
    category: "Heavy Civil Works",
    type: "photo",
    image: BridgeColumnImg,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 105,
    title: "Bridge Deck Slab & Shuttering Work",
    category: "Bridges & Flyovers",
    type: "photo",
    image: BridgeConstImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 106,
    title: "Bridge Substructure & Pile Cap Assembly",
    category: "Bridges & Flyovers",
    type: "photo",
    image: BridgeMBImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 107,
    title: "Asphalt Hot Mix Plant Site Operations",
    category: "Roads & Highways",
    type: "photo",
    image: HotMix2Img,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 108,
    title: "Automated Bituminous Hot Mix Setup",
    category: "Roads & Highways",
    type: "photo",
    image: HotmixImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 109,
    title: "Puzzolana High-Capacity Crushing Plant",
    category: "Equipment & Plants",
    type: "photo",
    image: PuzzolanaImg,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 110,
    title: "Aggregate Stone Crushing Facility",
    category: "Equipment & Plants",
    type: "photo",
    image: StoneCrusherImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 111,
    title: "Heavy Dumper & Tipper Fleet Convoy",
    category: "Fleet & Logistics",
    type: "photo",
    image: TruckConvoyImg,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 112,
    title: "Heavy Crawler Crane Mobilization",
    category: "Equipment & Fleet",
    type: "photo",
    image: HomeCraneImg,
    gridClass: "md:col-span-2 md:row-span-1",
  },

  // --- Project Media ---
  {
    id: 1,
    title: "Bridge Girder Launching & Deck Execution",
    category: "Bridges & Flyovers",
    type: "photo",
    image: Image1,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Expressway Grading & Paving Video Log",
    category: "Roads & Highways",
    type: "video",
    video: ClipVideo,
    poster: Image2,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Heavy Earthmoving & Soil Compaction",
    category: "Earthworks & Fleet",
    type: "photo",
    image: Image2,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "National Highway Corridor Multi-Axle Paving",
    category: "Roads & Highways",
    type: "photo",
    image: Image3,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    title: "Flyover Substructure Piling & Pier Casting",
    category: "Bridges & Flyovers",
    type: "video",
    video: ClipVideo3,
    poster: Image3,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Concrete Pavement & Drainage Infrastructure",
    category: "Roads & Highways",
    type: "photo",
    image: Image4,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "Excavator & Tipper Fleet Earthworks",
    category: "Earthworks & Fleet",
    type: "photo",
    image: Image5,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 8,
    title: "Highway Base Layer Spreading & Compacting",
    category: "Roads & Highways",
    type: "video",
    video: ClipVideo2,
    poster: Image4,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 9,
    title: "Industrial Civil Foundation & Steel Shuttering",
    category: "Industrial & Railways",
    type: "photo",
    image: Image6,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 10,
    title: "Bridge Pier Cap & Structural Bearings",
    category: "Bridges & Flyovers",
    type: "photo",
    image: Image7,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 11,
    title: "Pre-Stressed Concrete Girder Launch Sequence",
    category: "Bridges & Flyovers",
    type: "video",
    video: ClipVideo4,
    poster: Image5,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 12,
    title: "Expressway Alignment & Embankment Works",
    category: "Roads & Highways",
    type: "video",
    video: ClipVideo5,
    poster: Image6,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 13,
    title: "Heavy Machinery Grading & Formation Works",
    category: "Heavy Equipment",
    type: "video",
    video: ClipVideo6,
    poster: Image7,
    gridClass: "md:col-span-1 md:row-span-2",
  },
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState("all");
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Filter logic
  const filteredMedia =
    filter === "all"
      ? galleryMedia
      : galleryMedia.filter((item) => item.type === filter);

  const photoCount = galleryMedia.filter((item) => item.type === "photo").length;
  const videoCount = galleryMedia.filter((item) => item.type === "video").length;

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased">
      {/* 1. Minimal Hero Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 TitleCase">
            Project Visual Gallery
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            A visual documentation of our heavy civil engineering, structural
            execution, and infrastructure projects across India.
          </p>
        </div>
      </section>

      {/* 2. Media Controls / Filters */}
      <section className="sticky top-16 min-[1000px]:top-24 z-30 bg-gray-50/90 backdrop-blur-md border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
          <div className="inline-flex bg-white p-1 rounded-sm shadow-sm border border-gray-200">
            <button
              onClick={() => setFilter("all")}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold transition-colors rounded-sm ${
                filter === "all"
                  ? "bg-[#f25810] text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Grid2X2 className="w-4 h-4" />
              All Media ({galleryMedia.length})
            </button>
            <button
              onClick={() => setFilter("photo")}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold transition-colors rounded-sm ${
                filter === "photo"
                  ? "bg-[#f25810] text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Photos ({photoCount})
            </button>
            <button
              onClick={() => setFilter("video")}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-bold transition-colors rounded-sm ${
                filter === "video"
                  ? "bg-[#f25810] text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Film className="w-4 h-4" />
              Videos ({videoCount})
            </button>
          </div>
        </div>
      </section>

      {/* 3. Masonry-Style Media Grid with Names */}
      <section className="py-10 max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((media) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={media.id}
                onClick={() => setSelectedMedia(media)}
                className="relative group cursor-pointer overflow-hidden rounded-sm bg-gray-900 shadow-sm hover:shadow-2xl transition-all duration-300 mb-4 break-inside-avoid"
              >
                {/* Media rendering for the grid */}
                {media.type === "video" ? (
                  <video
                    src={media.video}
                    poster={media.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="metadata"
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                ) : (
                  <img
                    src={media.image}
                    alt={media.title}
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                )}

                {/* Dark Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Video Play Icon Indicator */}
                {media.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-12">
                    <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:bg-[#f25810] group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                    </div>
                  </div>
                )}

                {/* Title & Category Display Name Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300">
                  <span className="text-[#f25810] font-bold tracking-widest uppercase text-[10px] block mb-1">
                    {media.category}
                  </span>
                  <h3 className="text-white text-sm sm:text-base font-bold leading-tight drop-shadow-sm group-hover:text-white transition-colors">
                    {media.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-3.5 h-3.5 text-[#f25810]" />
                    <span>Click to Expand</span>
                  </div>
                </div>

                {/* Bottom Orange Indicator on Hover */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f25810] group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            No media found for this category.
          </div>
        )}
      </section>

      {/* 4. Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-110 text-white/70 hover:text-white bg-black/50 hover:bg-[#f25810] p-2.5 rounded-sm transition-colors cursor-pointer"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-7 h-7" />
            </button>

            {/* Media Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal if clicking media
            >
              {selectedMedia.type === "video" ? (
                <video
                  key={`video-${selectedMedia.id}`} // Force React to remount video so it plays
                  src={selectedMedia.video}
                  poster={selectedMedia.poster}
                  autoPlay
                  playsInline
                  controls
                  preload="metadata"
                  className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
                />
              ) : (
                <img
                  key={`img-${selectedMedia.id}`}
                  src={selectedMedia.image}
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl"
                />
              )}

              {/* Modal Caption / Name */}
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="text-[#f25810] font-bold tracking-widest uppercase text-xs">
                  {selectedMedia.category}
                </span>
                <h2 className="text-white text-lg sm:text-xl font-bold mt-1">
                  {selectedMedia.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}