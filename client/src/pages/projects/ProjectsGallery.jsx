import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Image as ImageIcon, Film, Grid2X2 } from "lucide-react";
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

// Media dataset
// Using grid spanning classes to create an asymmetrical "Bento Box" layout
const galleryMedia = [
  {
    id: 1,
    type: "photo",
    image: Image1,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    type: "video",
    video: ClipVideo,
    poster: Image2,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    type: "photo",
    image: Image2,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    type: "photo",
    image: Image3,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    type: "video",
    video: ClipVideo3,
    poster: Image3,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    type: "photo",
    image: Image4,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    type: "photo",
    image: Image5,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 8,
    type: "video",
    video: ClipVideo2,
    poster: Image4,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 9,
    type: "photo",
    image: Image6,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 10,
    type: "photo",
    image: Image7,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 11,
    type: "video",
    video: ClipVideo4,
    poster: Image5,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 12,
    type: "video",
    video: ClipVideo5,
    poster: Image6,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 13,
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
              All Media
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
              Photos
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
              Videos
            </button>
          </div>
        </div>
      </section>

      {/* 3. Masonry-Style Media Grid (Less empty gaps) */}
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
                className="relative group cursor-pointer overflow-hidden rounded-sm bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 mb-4 break-inside-avoid"
              >
                {/* Media rendering for the grid (Keeps controls false here) */}
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
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                ) : (
                  <img
                    src={media.image}
                    alt="MB Infraprojects Execution"
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                  />
                )}

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Video Play Icon Indicator */}
                {media.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#f25810] group-hover:scale-105 transition-all duration-300">
                      <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                    </div>
                  </div>
                )}
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
            className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-110 text-white/70 hover:text-white bg-black/50 hover:bg-[#f25810] p-2 rounded-sm transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Media Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal if clicking media
            >
              {selectedMedia.type === "video" ? (
                <video
                  key={`video-${selectedMedia.id}`} // Force React to remount video so it plays
                  src={selectedMedia.video}
                  poster={selectedMedia.poster}
                  autoPlay
                  playsInline
                  controls // ENABLED CONTROLS HERE SO USERS CAN PLAY IT IF BLOCKED
                  preload="metadata"
                  className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                />
              ) : (
                <img
                  key={`img-${selectedMedia.id}`}
                  src={selectedMedia.image}
                  alt="Expanded execution view"
                  className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}