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
          <div className="flex flex-col items-center gap-3 splash-fade">
            <img
              src={logo}
              alt="MB Infra"
              className="h-24 w-auto object-contain"
            />
          </div>
        </div>
      )}
      <AppRoutes />
    </>
  );
}
