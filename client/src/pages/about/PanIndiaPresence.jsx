// src/components/PanIndia/PanIndiaPresence.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, IndianRupee, MapPin } from "lucide-react";
import { panIndiaData } from "../../data/PanIndiaData";
import MapView from "./MapView";

export default function PanIndiaPresence() {
  const [activeLocation, setActiveLocation] = useState(null);

  useEffect(() => {
    // Auto-select the HQ on page load
    if (panIndiaData.length > 0) {
      setActiveLocation("hq-anand");
    }
  }, []);

  const totals = panIndiaData.reduce(
    (acc, proj) => {
      if (proj.type === "HQ") {
        acc.hq += 1;
      } else if (proj.status === "Completed") {
        acc.completed += 1;
      } else if (proj.status === "Ongoing") {
        acc.ongoing += 1;
      }
      return acc;
    },
    {
      hq: 0,
      completed: 0,
      ongoing: 0,
    }
  );

  return (
    <section className="py-16 md:py-24 bg-[#f6f3ee] text-gray-900 min-h-screen">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-[#1b1b1b] tracking-tight uppercase"
            >
              Powering Infrastructure Across the Nation{" "}
              <span className="text-[#f25810]">Across the Nation </span>
            </motion.h2>
            <p className="mt-4 text-gray-600 max-w-2xl text-sm md:text-base">
              A detailed geographic ledger of our operational headquarters and
              ongoing/completed heavy infrastructure mega-projects across India.
            </p>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg border border-black/10 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Headquarters
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Completed
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f25810] animate-pulse" />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Ongoing
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* LEFT SIDE: Clean Text-Based Data Dockets */}
          <div className="lg:col-span-5 flex flex-col gap-3 order-2 lg:order-1 h-full max-h-187.5 overflow-y-auto pr-2 custom-scrollbar">
            {panIndiaData.map((proj, idx) => {
              const isActive = activeLocation === proj.id;

              // Dynamic status badge styling
              let badgeStyle = "bg-[#f25810]/10 text-[#f25810]";
              if (proj.type === "HQ")
                badgeStyle = "bg-blue-600/10 text-blue-700";
              else if (proj.status === "Completed")
                badgeStyle = "bg-green-600/10 text-green-700";

              return (
                <motion.div
                  key={proj.id}
                  onClick={() => setActiveLocation(proj.id)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className={`cursor-pointer group flex flex-col p-5 rounded-lg border transition-all duration-200 
                    ${
                      isActive
                        ? "bg-white border-gray-200 shadow-md"
                        : "bg-white/70 border-gray-200 hover:border-gray-400 hover:bg-white"
                    }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className={`text-base font-bold pr-4 leading-snug transition-colors ${isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}
                    >
                      {proj.title}
                    </h3>
                    <span
                      className={`shrink-0 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded ${badgeStyle}`}
                    >
                      {proj.type === "HQ" ? "HQ" : proj.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-2 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin
                        size={14}
                        className={
                          isActive
                            ? proj.type === "HQ"
                              ? "text-blue-600"
                              : "text-[#f25810]"
                            : "text-gray-500"
                        }
                      />
                      <span className="text-gray-600 font-medium">
                        {proj.state}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Briefcase
                        size={14}
                        className={
                          isActive
                            ? proj.type === "HQ"
                              ? "text-blue-600"
                              : "text-[#f25810]"
                            : "text-gray-500"
                        }
                      />
                      <span className="text-gray-600 font-medium truncate">
                        {proj.client}
                      </span>
                    </div>

                    <div className="col-span-2 flex items-center gap-2 text-xs mt-1 border-t border-gray-200 pt-3">
                      <IndianRupee size={14} className="text-gray-400" />
                      <span
                        className={`font-bold ${isActive ? "text-gray-900" : "text-gray-600"}`}
                      >
                        {proj.type === "HQ"
                          ? proj.value
                          : `Project Value: ₹ ${proj.value}`}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Interactive Map (Sticky on Desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="sticky top-24">
              <MapView
                data={panIndiaData}
                activeLocation={activeLocation}
                onLocationSelect={setActiveLocation}
              />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Headquarters
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {totals.hq}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Central command and leadership hub
                  </p>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Completed Projects
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {totals.completed}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Projects delivered across states
                  </p>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Ongoing Projects
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">
                    {totals.ongoing}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Active execution & support teams
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-xl border border-black/10 bg-[#fff7f1] p-5 text-sm text-gray-600">
                Each pin represents a live operational footprint. Select any
                location on the map to highlight its details in the docket list
                and keep track of project status at a glance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
