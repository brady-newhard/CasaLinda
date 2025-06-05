// @ts-nocheck
import React from "react";
import Navbar from "../components/Navbar";

const Landing = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/images/Casa Linda - 60A.JPG')" }}>
      {/* Overlay for darkening the image for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Navbar */}
      <Navbar />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-left pt-64 pb-16 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg mb-4">Casa Linda</h1>
        <p className="text-white text-lg md:text-xl font-light drop-shadow mb-8 max-w-2xl">Relax and enjoy your stay in La Ventana at the beautiful Casa Linda. Experience comfort, style, and breathtaking views.</p>
        <a href="#" className="inline-block px-8 py-3 bg-white/80 text-blue-900 font-semibold rounded shadow hover:bg-white transition backdrop-blur border border-white/60">Book Now</a>
      </div>
      {/* Booking/Search Bar (commented out for now) */}
      {false && (
        <div className="relative z-20 w-full flex justify-center">
          <div className="w-full max-w-4xl -mt-10 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-4 md:gap-2">
            <div className="flex flex-col md:flex-row gap-4 md:gap-2 w-full md:w-auto flex-1">
              <div className="flex flex-col flex-1 min-w-[120px]">
                <label className="text-blue-900 text-xs font-semibold mb-1">Check In</label>
                <input type="text" placeholder="DD MM YYYY" className="border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
              </div>
              <div className="flex flex-col flex-1 min-w-[120px]">
                <label className="text-blue-900 text-xs font-semibold mb-1">Check Out</label>
                <input type="text" placeholder="DD MM YYYY" className="border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
              </div>
              <div className="flex flex-col flex-1 min-w-[80px]">
                <label className="text-blue-900 text-xs font-semibold mb-1">Adults</label>
                <input type="number" min="1" defaultValue="1" className="border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
              </div>
              <div className="flex flex-col flex-1 min-w-[80px]">
                <label className="text-blue-900 text-xs font-semibold mb-1">Kids</label>
                <input type="number" min="0" defaultValue="0" className="border rounded px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
              </div>
            </div>
            <button className="bg-blue-700 text-white px-8 py-2 rounded font-semibold hover:bg-blue-800 transition shadow mt-2 md:mt-0 w-full md:w-auto">Search</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing; 