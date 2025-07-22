import React from "react";
import { Link } from "react-router-dom";
import BGpic from "../../../assets/BGimages/bar9.jpg";
import { useState } from "react";


const shrekCocktails = [
  {
    name: "Mirror Mirror",
    recipe: [
      "1.5 oz Malibu Coconut Rum, ",
      "1 oz Amarula Liqueur, ",
      "4 oz Pineapple Juice"
    ],
    method: "Shake and dump into a Beer Glass. Garnish: Orange Slice, Green Sugar Rim. Ice: Cubes",
  },
  {
    name: "Princess Fiona",
    recipe: [
      "1 oz Blue Curacao, ",
      "1 oz Orange Juice, ",
      "Fill to top with Gambino Sparkling Wine"
    ],
    method: "Build in a Coupe glass. Garnish: Green Sugar Rim, Gum Drop. Ice: None",
  },
  {
    name: "Dragon Old Fashioned",
    recipe: [
      "2 oz WhistlePig 6 Year Piggyback Rye Whiskey, ",
      "1 oz Dress The Drink Smoked Cherry Simple Syrup, ",
      "2 Dashes Angostura Bitters"
    ],
    method: "Stir and strain into a Double Old Fashioned Glass. Smoke the drink. Garnish: Smoked, Cherry, Orange Swath. Ice: Large Cube",
  },
  {
    name: "I'm The Gingerbread Man!",
    recipe: [
      "1 oz Dough Ball Cookie Dough Whiskey, ",
      "1 oz Bicerin Dark Chocolate Liqueur, ",
      "1 oz Half and Half, ",
      "0.25 oz Monin Cinnamon Syrup"
    ],
    method: "Shake and strain into a Martini Glass. Garnish: Gum Drop, Green Sugar Rim. Ice: None",
  },
  {
    name: "Shrek-A-Rita",
    recipe: [
      "1.5 oz Sauza Hacienda Blanco Tequila, ",
      "0.5 oz Mr. Boston Melon Liqueur, ",
      "0.5 oz Lemon Juice, ",
      "0.5 oz Lime Juice, ",
      "1 oz Real Agave Syrup"
    ],
    method: "Shake and dump into a Double Old Fashioned Glass. Garnish: Green Sugar Rim, Gum Drop. Ice: Cubes",
  }
];






export default function ShrekCocktails() {
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
          Shrek Cocktails
        </h1>

        <p className="text-lg font-mono font-bold text-emerald-100">
            Enjoy these themed cocktails inspired by the beloved Shrek franchise!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-left">
          {shrekCocktails.map((cocktail, index) => (
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