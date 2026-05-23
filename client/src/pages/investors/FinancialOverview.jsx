import React from "react";
import { motion } from "framer-motion";
import { BarChart3, ChevronRight, Hand, TrendingUp } from "lucide-react";

export default function FinancialOverview() {
  // Exact data extracted directly from the provided MB Infra image record
  const turnoverData = [
    { year: "2019-20", value: 38.46 },
    { year: "2020-21", value: 47.67 },
    { year: "2021-22", value: 53.74 },
    { year: "2022-23", value: 43.67 },
    { year: "2023-24", value: 75.56 }
  ];

  // Chart configuration
  const chartCeiling = 100; // Set ceiling to 100 Cr for a clean Y-axis scale
  const yAxisSteps = [100, 75, 50, 25, 0];

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900 selection:bg-[#f25810]/10 selection:text-[#f25810] flex flex-col">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-gray-950 flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(#f25810_1px,transparent_1px),linear-gradient(90deg,#f25810_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-8 bg-[#f25810]"></div>
              <span className="text-[#f25810] text-sm font-semibold tracking-wide">
                Financial Performance
              </span>
              <div className="h-0.5 w-8 bg-[#f25810]"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-none mb-4">
              Yearly <span className="text-[#f25810]">Turnover</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
              Tracking our continuous financial scaling across consecutive fiscal years. All values are represented in Crores (INR).
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PREMIUM EXECUTIVE BAR CHART */}
      <section className="flex-1 py-16 md:py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
          
          {/* Header & Context */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-100 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#f25810]">
                <BarChart3 size={20} />
                <span className="text-sm font-semibold tracking-wide">Revenue Metrics</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                5-Year Growth Trajectory
              </h2>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 px-5 py-3 rounded-sm flex items-center gap-4">
              <TrendingUp size={24} className="text-gray-400" />
              <div>
                <p className="text-xs font-semibold text-gray-500 tracking-wide">Latest FY 2023-24</p>
                <p className="text-xl font-bold text-gray-900">₹ 75.56 Cr</p>
              </div>
            </div>
          </div>

          {/* Mobile swipe hint */}
          <div className="md:hidden flex items-center justify-end text-xs font-medium text-[#f25810] mb-4 animate-pulse tracking-wide">
            <Hand size={14} className="mr-1.5" />
            Swipe chart <ChevronRight size={14} />
          </div>

          {/* Chart Container */}
          <div className="w-full overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing pb-8">
            <div className="min-w-[600px] md:min-w-full flex h-[350px] md:h-[450px]">
              
              {/* Y-Axis Legend */}
              <div className="flex flex-col justify-between py-8 pr-4 border-r-2 border-gray-900 text-xs font-mono font-medium text-gray-400 text-right w-16 md:w-20 shrink-0">
                {yAxisSteps.map((step) => (
                  <span key={step}>{step} Cr</span>
                ))}
              </div>

              {/* Chart Plot Area */}
              <div className="relative flex-1 flex items-end justify-around px-2 md:px-8 border-b-2 border-gray-900 pb-0 pt-8">
                
                {/* Horizontal Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-8 pointer-events-none z-0">
                  {yAxisSteps.map((step, i) => (
                    <div 
                      key={step} 
                      className={`w-full border-b ${i === yAxisSteps.length - 1 ? 'border-transparent' : 'border-dashed border-gray-200'}`} 
                    />
                  ))}
                </div>

                {/* Vertical Data Bars */}
                {turnoverData.map((data, idx) => {
                  const heightPercentage = (data.value / chartCeiling) * 100;
                  
                  return (
                    <div key={idx} className="relative z-10 flex flex-col items-center group w-14 md:w-24 h-full justify-end">
                      
                      {/* Hover / Value Tooltip */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + (idx * 0.1) }}
                        className="mb-3 flex flex-col items-center transition-transform group-hover:-translate-y-2"
                      >
                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#f25810] transition-colors">
                          ₹{data.value}
                        </span>
                      </motion.div>

                      {/* The Bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${heightPercentage}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 0.8, 
                          delay: idx * 0.15,
                          ease: [0.25, 1, 0.5, 1] // Smooth ease-out
                        }}
                        className="w-full bg-gradient-to-t from-gray-900 via-[#8a3104] to-[#f25810] rounded-t-sm shadow-md cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:brightness-110"
                      >
                        {/* Shimmer effect inside bar on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </motion.div>

                      {/* Year Label */}
                      <div className="absolute -bottom-8 md:-bottom-10 flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mb-1.5 group-hover:bg-[#f25810] transition-colors"></div>
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap group-hover:text-gray-900 transition-colors">
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

      {/* Hide scrollbar CSS injection for mobile smoothness */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}