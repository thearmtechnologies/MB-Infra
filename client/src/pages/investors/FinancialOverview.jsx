import React from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";

export default function FinancialOverview() {
  const turnoverData = [
    { year: "2019-20", value: 38.46 },
    { year: "2020-21", value: 47.67 },
    { year: "2021-22", value: 53.74 },
    { year: "2022-23", value: 43.67 },
    { year: "2023-24", value: 75.56 },
  ];

  const chartCeiling = 100;
  const yAxisSteps = [100, 75, 50, 25, 0];

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(#f25810_1px,transparent_1px),linear-gradient(90deg,#f25810_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#f25810]" />
            <span className="text-[#f25810] text-sm font-semibold tracking-widest uppercase">
              Financial Performance
            </span>
            <div className="h-px w-10 bg-[#f25810]" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Yearly <span className="text-[#f25810]">Turnover</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
            Tracking our continuous financial scaling across consecutive fiscal
            years. All values are represented in Crores (INR).
          </p>
        </div>
      </section>

      {/* CHART SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 border-b border-gray-200 pb-8">
            <div>
              <div className="flex items-center gap-2 text-[#f25810] mb-3">
                <BarChart3 size={20} />
                <span className="text-sm font-semibold tracking-wide">
                  Revenue Metrics
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                5-Year Growth in ₹ Cr{" "}
              </h2>
            </div>

            <div className="bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg flex items-center gap-4 shadow-sm">
              <TrendingUp size={26} className="text-[#f25810]" />

              <div>
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Latest FY 2023-24
                </p>

                <p className="text-2xl font-bold text-black">₹ 75.56 Cr</p>
              </div>
            </div>
          </div>

          {/* CHART */}
          <div className="w-full">
            <div className="flex w-full h-105 md:h-130">
              {/* Y AXIS */}
              <div className="w-14 md:w-20 flex flex-col justify-between pr-3 border-r-2 border-black text-[11px] md:text-xs text-gray-500 font-medium py-4">
                {yAxisSteps.map((step) => (
                  <span key={step}>{step} Cr</span>
                ))}
              </div>

              {/* GRAPH AREA */}
              <div className="relative flex-1 flex justify-around items-end border-b-2 border-black px-3 md:px-8 pt-6 pb-16">
                {/* GRID LINES */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-4">
                  {yAxisSteps.map((_, i) => (
                    <div
                      key={i}
                      className="border-b border-dashed border-gray-200 w-full"
                    />
                  ))}
                </div>

                {/* BARS */}
                {turnoverData.map((data, idx) => {
                  const heightPercentage = (data.value / chartCeiling) * 100;

                  return (
                    <div
                      key={idx}
                      className="relative z-10 flex flex-col items-center justify-end h-full group"
                    >
                      {/* VALUE */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-3"
                      >
                        <span className="text-xs md:text-sm font-bold text-black group-hover:text-[#f25810] transition-colors">
                          ₹{data.value} Cr
                        </span>
                      </motion.div>

                      {/* BAR */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${heightPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: idx * 0.12,
                        }}
                        className="w-10 sm:w-14 md:w-20 rounded-t-md bg-linear-to-t from-black via-[#6b2603] to-[#f25810] shadow-lg hover:brightness-110 transition-all duration-300"
                      />

                      {/* YEAR */}
                      <div className="mt-4 flex flex-col items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mb-2 group-hover:bg-[#f25810] transition-colors" />

                        <span className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-600 whitespace-nowrap group-hover:text-black transition-colors">
                          {data.year}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
