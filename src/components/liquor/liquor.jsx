import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../assets/BGimages/bar12.jpg";

export default function Cocktails() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${BGpic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-5xl font-mono font-bold text-emerald-500 drop-shadow-lg">
          Vic’s Beer and Liqour Program
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Dive into our extensive beer and liquor program.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          <Link
            to="/liquor/beer"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Beers
          </Link>
          <Link
            to="/liquor/well"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Well Liquors
          </Link>
          <Link
            to="/liquor/amaros"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Amaros and Cordials
          </Link>
          <Link
            to="/liquor/vodkas"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Vodkas
          </Link>
          <Link
            to="/liquor/rums"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Rums
          </Link>
          <Link
            to="/liquor/gins"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Gins
          </Link>
          <Link
            to="/liquor/tequilas"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Tequilas
          </Link>
          <Link
            to="/liquor/bourbons"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Bourbons
          </Link>
          <Link
            to="/liquor/ryes"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Ryes
          </Link>
          <Link
            to="/liquor/internationalwhiskeys"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            International Whiskeys
          </Link>
        </div>
      </div>
    </div>
  );
}
