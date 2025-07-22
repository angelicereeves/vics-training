import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar10.jpg";
import { useState } from "react";


const cincodemayoCocktails = [
   {
    name: "Margarita Flight",
    recipe: [
      "3 oz Sauza Hacienda Blanco Tequila, ",
      "1.5 oz Triple Sec, ",
      "1.5 oz Lemon Juice, ",
      "1.5 oz Lime Juice, ",
      "1 oz each: Mango Puree, Cream of Coconut, Watermelon Puree"
    ],
    method: "Shake and batch into Store and Pour containers. Serve in Single Old Fashioned glasses. Garnish: Tajin Rim (Mango Jalapeño), Sugar Rim (Coconut), Red Sugar Rim (Watermelon). Ice: None in batch, Cubes in glasses",
  },
  {
    name: "Fish Bowl Margarita",
    recipe: [
      "1.5 oz Sauza Hacienda Blanco Tequila, ",
      "0.5 oz Triple Sec, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Lime Juice, ",
      "0.5 oz Agave Syrup"
    ],
    method: "Shake and dirty dump into a Schooner Glass. Garnish: Salt Rim. Optional: Add 7 oz Coronita for $2. Ice: Cubes",
  }
];






export default function CincodeMayoCocktails() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white py-16 px-6 relative"
      style={{ backgroundImage: `url(${BGpic})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-emerald-900 bg-opacity-0 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
        <Link
          to="/cocktails/seasonalcocktails/seasonalcocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Seasonal Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Vic’s Cinco de Mayo Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
          Crafted with love and tequila, these cocktails are perfect for celebrating Cinco de Mayo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 text-left">
          {cincodemayoCocktails.map((cocktail, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-emerald-400 rounded-2xl p-4 shadow-xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h2 className="text-xl font-mono font-bold text-emerald-200">
                  {cocktail.name}
                </h2>
                <span
                  className={`text-xl font-bold transition ${
                    expandedIndex === index
                      ? "text-emerald-400"
                      : "text-gray-300"
                  }`}
                >
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </div>

              {expandedIndex === index && (
                <div className="mt-4 space-y-4">
                  <div className="w-full h-48 bg-emerald-950/20 border border-emerald-500 rounded-xl flex items-center justify-center text-sm italic text-emerald-300">
                    {/* Image Placeholder */}
                    Image goes here
                  </div>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Recipe: </span>
                    {cocktail.recipe}
                  </p>
                  <p className="text-sm font-mono font-semibold text-emerald-100">
                    <span className="font-bold text-emerald-500">Method: </span>
                    {cocktail.method}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}