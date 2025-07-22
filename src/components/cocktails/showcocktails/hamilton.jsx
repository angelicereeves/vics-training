import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar22.jpg";
import { useState } from "react";


const hamiltonCocktails = [
  {
    name: "Satisfied",
    recipe: [
      "1.5 oz Smirnoff Citron, ",
      "1 oz Jasmine Tea, ",
      "0.25 oz Lemon Juice, ",
      "Fill with Club Soda, ",
      "Top with Sparkling Wine"
    ],
    method: "Build in an AP Wine Glass. Garnish: Dried Kiwi Chip. Ice: Cubes",
  },
  {
    name: "The Room Where It Happens",
    recipe: [
      "1.5 oz Vanilla Vodka, ",
      "1 oz Mr Boston Sour Apple Schnapps, ",
      "0.75 oz Caramel Apple Butter Monin, ",
      "0.25 oz Lemon Juice, ",
      "2 Dashes Bitter Truth Chocolate Bitters"
    ],
    method: "Shake and strain into a Martini Glass. Pinch sea salt on top. Garnish: Dried Green Apple Chip, Salt Rim. Ice: None",
  },
  {
    name: "Alexander Hamilton",
    recipe: [
      "1 oz Goslings Black Seal Rum, ",
      "1 oz Creme De Cacao Dark, ",
      "1 oz Half and Half, ",
      "1 oz Allspice Dram"
    ],
    method: "Shake and strain into a Coupe Glass. Garnish: Dried Starfruit Chip. Ice: None",
  },
  {
    name: "Wait For It...",
    recipe: [
      "1.5 oz Primrose Gin, ",
      "1 oz Passionfruit Simple Syrup, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Triple Sec, ",
      "2 oz Pineapple Juice"
    ],
    method: "Shake and dirty dump into a Double Old Fashioned Glass, then top with Sprite. Garnish: Dried Pineapple Chip. Ice: Cubes",
  },
  {
    name: "My Shot",
    recipe: [
      "2 oz Four Roses Bourbon, ",
      "1 oz Fig Simple Syrup, ",
      "2 Dashes Rhubarb Bitters"
    ],
    method: "Stir and strain into an Old Fashioned Glass. Garnish: Orange Swath and Amarena Cherry. Ice: Large Cube",
  }
];





export default function HamiltonCocktails() {
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
          to="/cocktails/showcocktails/showcocktails"
          className="inline-block mt-16 px-6 py-3 bg-white text-emerald-800 font-bold rounded-full shadow-lg hover:bg-emerald-100 transition"
        >
          ← Back to Show Cocktails
        </Link>
        <h1 className="text-5xl font-mono font-bold text-emerald-300 drop-shadow-lg">
          Hamilton Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Experience the revolutionary spirit of Hamilton with these exquisite cocktails.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {hamiltonCocktails.map((cocktail, index) => (
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