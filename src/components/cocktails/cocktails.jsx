import React from "react";
import { Link } from "react-router-dom";
import cocktailsBg from "../../assets/BGimages/cocktailsbg.jpg";

export default function Cocktails() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${cocktailsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
        <h1 className="text-5xl font-mono font-bold text-emerald-500 drop-shadow-lg">
          Vic’s Cocktail Program
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Dive into our curated list of house specialties and beloved classics, as well as specialty show cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          <Link
            to="/cocktails/specialtycocktails"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Specialty Cocktails
          </Link>
          <Link
            to="/cocktails/classiccocktails"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Classic Cocktails
          </Link>
          <Link
            to="/cocktails/dessertcocktails"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Dessert Cocktails
          </Link>
          <Link
            to="/cocktails/showcocktails/showcocktails"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Show Cocktails
          </Link>
          <Link
            to="/cocktails/seasonalcocktails/seasonalcocktails"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Seasonal and Holiday Cocktails
          </Link>
          <Link
            to="/cocktails/mocktails"
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold font-mono text-center py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Mocktails
          </Link>
        </div>
      </div>
    </div>
  );
}
