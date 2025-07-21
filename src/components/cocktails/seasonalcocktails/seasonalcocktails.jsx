import React from "react";
import { Link } from "react-router-dom";
import cocktailsBg from "../../../assets/BGimages/bar1.jpg";

export default function SeasonalCocktails() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${cocktailsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <Link
          to="/cocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-500 drop-shadow-lg">
          Seasonal and Holiday Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Themed cocktails for the seasons.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
                  <Link
                    to="/cocktails/seasonalcocktails/valentinesday"
                    className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
                  >
                    Valentine's Day
                  </Link>
        <Link
                    to="/cocktails/seasonalcocktails/christmas"
                    className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
                  >
                    Christmas
                  </Link>
        <Link
                    to="/cocktails/seasonalcocktails/autumn"
                    className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
                  >
                    Autumn
                  </Link>
        <Link
                    to="/cocktails/seasonalcocktails/cincodemayo"
                    className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
                  >
                    Cinco de Mayo
                  </Link>
        </div>
      </div>
    </div>
  );
}
