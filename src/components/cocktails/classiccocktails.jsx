import React from "react";
import { Link } from "react-router-dom";
import cocktailsBg from "../../assets/BGimages/cocktailsbg.jpg";

export default function ClassicCocktails() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${cocktailsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10 bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-serif font-bold text-emerald-300 drop-shadow-lg">
          🍸 Vic’s Cocktail Training
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Dive into our curated list of house specialties and beloved classics.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6">
          <Link
            to="/cocktails/specialtycocktails"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Specialty Cocktails
          </Link>
          <Link
            to="/cocktails/classiccocktails"
            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-md transition duration-300"
          >
            Classic Cocktails
          </Link>
        </div>
      </div>
    </div>
  );
}
