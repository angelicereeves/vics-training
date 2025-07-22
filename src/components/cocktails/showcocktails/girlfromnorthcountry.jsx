import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar21.jpg";
import { useState } from "react";


const girlFromNorthCountryCocktails = [
   {
    name: "Hurricane",
    recipe: [
      "0.75 oz Captain Morgan Spiced Rum, ",
      "0.75 oz Malibu Coconut Rum, ",
      "1 oz Orange Juice, ",
      "1 oz Pineapple Juice, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Lime Juice, ",
      "Splash Grenadine, ",
      "Float Ron Zacapa 23 Year Dark Rum"
    ],
    method: "Build in a Beer Glass. Garnish: Orange Slice, Cherry. Ice: Cubes",
  },
  {
    name: "Like A Rolling Stone",
    recipe: [
      "2 oz Pendleton Midnight, ",
      "1 oz Simple Syrup, ",
      "3 Dashes Angostura Bitters"
    ],
    method: "Stir and strain into an Old Fashioned Glass. Garnish: Orange Swath, Cherry. Ice: Large Cube",
  },
  {
    name: "Senor",
    recipe: [
      "1.5 oz Flecha Azul Añejo Tequila, ",
      "0.5 oz Mr. Boston Triple Sec, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Lime Juice, ",
      "Squeeze Mango Puree"
    ],
    method: "Shake and strain into a Double Old Fashioned Glass. Garnish: Tajin Rim, Spicy Mango Chip. Ice: Cubes",
  },
  {
    name: "Forever Young",
    recipe: [
      "1.5 oz Coit Gin, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Vanilla Simple Syrup, ",
      "3 oz Gambino Sparkling Wine"
    ],
    method: "Build in a Coupe Glass. Garnish: Lemon Swath. Ice: None",
  },
  {
    name: "Make You Feel My Love",
    recipe: [
      "1.5 oz Wild Roots Apple Cinnamon Vodka, ",
      "1.5 oz Apple Juice, ",
      "1 oz Pineapple Juice, ",
      "1 oz Lemon Juice, ",
      "Fill with Ginger Ale"
    ],
    method: "Build in an AP Wine Glass. Garnish: None. Ice: Cubes",
  }
];





export default function GirlFromNorthCountryCocktails() {
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
          Girl From The North Country Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Cocktails inspired by the musical "Girl From The North Country"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {girlFromNorthCountryCocktails.map((cocktail, index) => (
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