import React, { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import logo from "./assets/img/logo.svg";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4 splash-fade px-6 text-center">
            <img
              src={logo}
              alt="MB Infra"
              className="h-20 sm:h-24 w-auto object-contain"
            />
            <div className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
              Loading
            </div>
            <div className="h-9 w-9 rounded-full border-2 border-gray-200 border-t-[#f25810] animate-spin" />
            <div className="text-[11px] sm:text-xs text-gray-400 tracking-wide">
           Building Tomorrow’s Infrastructure
            </div>
          </div>
        </div>
      )}
      <AppRoutes />
    </>
  );
}
