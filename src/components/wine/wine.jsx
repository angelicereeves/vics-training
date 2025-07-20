import React from "react";
import { Link } from "react-router-dom";
import wineBG from "../../assets/BGimages/winebg.jpg";

export default function WineHome() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white relative"
      style={{ backgroundImage: `url(${wineBG})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-8">
        <h1 className="text-5xl font-serif font-bold text-emerald-400 drop-shadow-md">
          Wine at Vic’s
        </h1>

        <p className="text-lg font-mono font-medium text-gray-200 leading-relaxed">
          Our curated wine list highlights elegant selections from across the globe.
          From effervescent sparklings to bold reds, each bottle is chosen to pair with our
          menu and enhance the jazz-filled ambiance of Vic’s.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
          <Link
            to="/wine/white"
            className="px-6 py-3 bg-emerald-500 text-black font-bold rounded-full shadow-lg hover:bg-emerald-400 transition"
          >
            BTB White Wines
          </Link>
          <Link
            to="/wine/red"
            className="px-6 py-3 bg-emerald-700 text-white font-bold rounded-full shadow-lg hover:bg-emerald-600 transition"
          >
            BTB Red Wines
          </Link>
                    <Link
            to="/bytheglass"
            className="px-6 py-3 bg-emerald-700 text-white font-bold rounded-full shadow-lg hover:bg-emerald-600 transition"
          >
            By the Glass Wines
          </Link>
                    <Link
            to="/pairing"
            className="px-6 py-3 bg-emerald-700 text-white font-bold rounded-full shadow-lg hover:bg-emerald-600 transition"
          >
            Wine Pairing Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
