import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="w-full border-b-[1px] backdrop-blur-sm border-slate-500 fixed top-0 z-50">
      <header className="px-3 py-2 md:px-6 md:py-4 text-slate-400 flex justify-between items-center">
        <Link to="/">
          <i className="ri-bard-fill md:text-xl hover:text-white"></i>
        </Link>
        <div className="text-sm flex items-center gap-3 md:gap-6">
          <span className="hidden md:inline hover:text-white">{time}</span>
          <Link to="/discover" className="hover:text-white">
            Explore Events <i className="ri-arrow-right-up-line"></i>
          </Link>
          <button className="px-4 py-1 rounded-2xl hover:text-white bg-[rgba(55,58,59,0.8)]">
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
